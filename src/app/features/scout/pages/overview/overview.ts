import { Component, computed, inject, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import {
  CellClickedEvent,
  ClientSideRowModelModule,
  ColDef,
  GridApi,
  GridReadyEvent,
  ModuleRegistry,
  NumberFilterModule,
  PaginationModule,
  QuickFilterModule,
  TextFilterModule,
  themeQuartz,
  TooltipModule,
} from 'ag-grid-community';
import { ScoutObject, ScoutValue } from '../../models/scout-object.model';
import { scoutColumnDefs } from '../../models/scout-columns';
import { ScoutStore } from '../../state/scout.store';

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  NumberFilterModule,
  PaginationModule,
  QuickFilterModule,
  TextFilterModule,
  TooltipModule,
]);

interface DetailField {
  key: keyof ScoutObject;
  label: string;
  unit?: string;
  description: string;
}

interface DetailSection {
  title: string;
  icon: string;
  fields: DetailField[];
}

const detailSections: DetailSection[] = [
  {
    title: 'Object & observation data',
    icon: 'pi pi-chart-line',
    fields: [
      { key: 'objectName', label: 'Object designation', description: 'NEOCP temporary object designation' },
      { key: 'nObs', label: 'Observations', description: 'Number of observations available' },
      { key: 'arc', label: 'Observation arc', unit: 'hours', description: 'Length of the observation data arc in hours' },
      { key: 'rmsN', label: 'Orbit-fit RMS', description: 'RMS of the weighted residuals for the best fitting orbit' },
      { key: 'lastRun', label: 'Last update (UTC)', description: '(YYYY-MM-DD hh:mm) - Date/time of last object analysis computation (UTC)' },
      { key: 'tEphem', label: 'Ephemeris time (UTC)', description: 'Time corresponding to the current ephemeris, in UTC' },
    ],
  },
  {
    title: 'Current ephemeris',
    icon: 'pi pi-compass',
    fields: [
      { key: 'ra', label: 'Right ascension', description: 'Right Ascension of the current ephemeris (hh:mm, ICRF)' },
      { key: 'dec', label: 'Declination', unit: 'degrees', description: 'Declination of the current ephemeris (degrees, ICRF)' },
      { key: 'rate', label: 'Plane-of-sky rate', unit: 'arc-seconds per minute', description: 'Plane-of-sky rate of motion (arc-seconds per minute)' },
      { key: 'elong', label: 'Solar elongation', unit: 'degrees', description: 'Solar elongation of the current ephemeris (degrees)' },
      { key: 'unc', label: 'Current position uncertainty', unit: 'arc-minutes', description: '1-sigma uncertainty in the plane-of-sky of the current ephemeris (arc-minutes)' },
      { key: 'uncP1', label: 'Position uncertainty in one day', unit: 'arc-minutes', description: '1-sigma uncertainty in the plane-of-sky one day after the current ephemeris (arc-minutes)' },
      { key: 'Vmag', label: 'V-band magnitude', unit: 'mag', description: 'V-band magnitude estimate of the current ephemeris (mag)' },
    ],
  },
  {
    title: 'Brightness & size',
    icon: 'pi pi-sun',
    fields: [
      { key: 'H', label: 'Absolute magnitude', description: 'Absolute magnitude' },
    ],
  },
  {
    title: 'Earth approach',
    icon: 'pi pi-globe',
    fields: [
      { key: 'rating', label: 'Impact rating', description: 'A rating to characterize the chances of an Earth impact (0=negligible, 1=small, 2=modest, 3=moderate, 4=elevated)' },
      { key: 'caDist', label: 'Close-approach distance', unit: 'lunar distances (LD)', description: 'Close-approach distance to Earth in lunar distances (LD)' },
      { key: 'moid', label: 'Minimum orbit intersection distance', unit: 'au', description: 'Minimum distance between the orbits of Earth and the object (au)' },
      { key: 'vInf', label: 'Asymptotic velocity', unit: 'km/s', description: 'Asymptotic velocity relative to Earth (when defined)' },
    ],
  },
  {
    title: 'Classification scores',
    icon: 'pi pi-tags',
    fields: [
      { key: 'neoScore', label: 'NEO score', unit: '%', description: 'Score for the object being a NEO (0-100)' },
      { key: 'neo1kmScore', label: 'NEO larger than 1 km score', unit: '%', description: 'Score for the object being an NEO larger than 1 km in diameter (0-100)' },
      { key: 'phaScore', label: 'PHA score', unit: '%', description: 'Score for the object being a PHA (0-100)' },
      { key: 'ieoScore', label: 'IEO score', unit: '%', description: 'Score for the object being an IEO, Interior Earth Object (0-100)' },
      { key: 'geocentricScore', label: 'Geocentric orbit score', unit: '%', description: 'Score for the object having a geocentric orbit (0-100)' },
      { key: 'tisserandScore', label: 'Jupiter Tisserand score', unit: '%', description: 'Score for the object having a Jupiter tisserand invariant less than 3, comet-like orbit (0-100)' },
    ],
  },
];

function hasValue(value: ScoutValue | undefined): value is string | number {
  return value !== null && value !== undefined && value !== '';
}

function displayValue(value: ScoutValue | undefined, unit?: string): string {
  if (!hasValue(value)) {
    return '—';
  }

  return unit ? `${value} ${unit}` : String(value);
}

@Component({
  selector: 'app-overview',
  imports: [AgGridAngular, ButtonModule, DrawerModule],
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview {
  readonly store = inject(ScoutStore);
  readonly columnDefs = scoutColumnDefs;
  readonly detailView = computed(() => {
    const object = this.selectedObject();
    if (!object) {
      return null;
    }

    const sections = detailSections
      .map((section) => ({
        title: section.title,
        icon: section.icon,
        fields: section.fields.flatMap((field) => {
          const value = object[field.key];
          return hasValue(value)
            ? [{ label: field.label, value: displayValue(value, field.unit), description: field.description }]
            : [];
        }),
      }))
      .filter((section) => section.fields.length > 0);

    const elevated = Number(object.rating) >= 1;
    return {
      objectName: String(object.objectName ?? 'Unknown object'),
      elevated,
      statusIcon: elevated ? 'pi pi-exclamation-triangle' : 'pi pi-shield',
      statusTitle: elevated ? 'Elevated impact indicator' : 'No elevated impact indicator',
      ratingValue: hasValue(object.rating) ? String(object.rating) : 'Not available',
      highlights: [
        { label: 'Observations', value: displayValue(object.nObs), icon: 'pi-eye' },
        { label: 'Observation arc', value: displayValue(object.arc, 'h'), icon: 'pi-clock' },
        { label: 'Closest approach', value: displayValue(object.caDist, 'LD'), icon: 'pi-globe' },
        { label: 'PHA likelihood', value: displayValue(object.phaScore, '%'), icon: 'pi-shield' },
      ],
      sections,
    };
  });
  readonly selectedObject = signal<ScoutObject | null>(null);
  readonly drawerVisible = signal(false);
  private gridApi?: GridApi<ScoutObject>;
  quickFilterText = '';
  readonly impactCount = computed(
    () => this.store.objects().filter(({ rating }) => Number(rating) >= 1).length,
  );
  readonly phaObjectCount = computed(
    () => this.store.objects().filter(({ phaScore }) => Number(phaScore) > 0).length,
  );
  readonly defaultColDef: ColDef<ScoutObject> = {
    sortable: true,
    resizable: true,
    filter: true,
    floatingFilter: true,
    minWidth: 100,
  };
  readonly pageSizeOptions = [10, 20, 50, 100];
  readonly tooltipShowDelay = 0;
  readonly tooltipShowMode = 'standard' as const;
  readonly theme = themeQuartz;

  constructor() {
    this.store.load();
  }

  onGridReady({ api }: GridReadyEvent<ScoutObject>): void {
    this.gridApi = api;
  }

  onCellClicked({ column, data }: CellClickedEvent<ScoutObject>): void {
    if (column.getColId() === 'objectName' && data) {
      this.selectedObject.set(data);
      this.drawerVisible.set(true);
    }
  }

  closeDetails(): void {
    this.drawerVisible.set(false);
    this.selectedObject.set(null);
  }

  onQuickFilterChange(value: string): void {
    this.quickFilterText = value;
    this.gridApi?.setGridOption('quickFilterText', value);
  }

  clearQuickFilter(): void {
    this.onQuickFilterChange('');
  }

  resetFilters(): void {
    this.gridApi?.setFilterModel(null);
    this.clearQuickFilter();
  }
}
