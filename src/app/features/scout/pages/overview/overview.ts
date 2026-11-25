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

@Component({
  selector: 'app-overview',
  imports: [AgGridAngular, ButtonModule, DrawerModule],
  styleUrl: './overview.scss',
  templateUrl: './overview.html',
})
export class Overview {
  readonly store = inject(ScoutStore);
  readonly columnDefs = scoutColumnDefs;
  readonly selectedObject = signal<ScoutObject | null>(null);
  readonly drawerVisible = signal(false);
  readonly detailSections: DetailSection[] = [
    {
      title: 'Observations & calculation',
      icon: 'pi pi-chart-line',
      fields: [
        { key: 'nObs', label: 'Observations', description: 'Optical astrometric measurements used in this assessment.' },
        { key: 'arc', label: 'Observation arc', unit: 'hours', description: 'Time between the first and most recent observations.' },
        { key: 'lastRunTimestamp', label: 'Last calculated', description: 'UTC time of the latest Scout trajectory and hazard calculation.' },
        { key: 'lastRun', label: 'Run identifier', description: 'Identifier for the latest Scout calculation.' },
      ],
    },
    {
      title: 'Position & motion',
      icon: 'pi pi-compass',
      fields: [
        { key: 'ra', label: 'Right ascension', unit: 'J2000', description: 'Current geocentric position measured eastward across the sky.' },
        { key: 'dec', label: 'Declination', unit: 'degrees · J2000', description: 'Current geocentric position measured north or south of the celestial equator.' },
        { key: 'rate', label: 'Motion rate', unit: 'arcsec/min', description: 'Apparent rate of motion across the sky.' },
        { key: 'elong', label: 'Solar elongation', unit: 'degrees', description: 'Angular separation between the object and the Sun.' },
        { key: 'unc', label: 'Current position uncertainty', unit: 'arcmin', description: 'One-sigma uncertainty in the predicted sky position.' },
        { key: 'uncP1', label: 'Uncertainty in 24 hours', unit: 'arcmin', description: 'Predicted one-sigma sky-position uncertainty 24 hours from now.' },
      ],
    },
    {
      title: 'Brightness & size',
      icon: 'pi pi-sun',
      fields: [
        { key: 'Vmag', label: 'Visual magnitude', description: 'Predicted apparent visual brightness; smaller values are brighter.' },
        { key: 'H', label: 'Absolute magnitude (H)', description: 'Intrinsic brightness estimate, often used as a proxy for object size.' },
      ],
    },
    {
      title: 'Earth approach',
      icon: 'pi pi-globe',
      fields: [
        { key: 'rating', label: 'Impact rating', description: 'Scout hazard rating; a value of 1 or more indicates an elevated short-term impact possibility.' },
        { key: 'caDist', label: 'Close-approach distance', unit: 'lunar distances', description: 'Median predicted distance from Earth. One lunar distance is about 384,400 km.' },
        { key: 'moid', label: 'Earth MOID', unit: 'au', description: 'Minimum orbital distance between the object’s orbit and Earth’s orbit.' },
        { key: 'vInf', label: 'Encounter velocity', unit: 'km/s', description: 'Hyperbolic excess velocity relative to Earth at close approach.' },
      ],
    },
    {
      title: 'Object classifications',
      icon: 'pi pi-tags',
      fields: [
        { key: 'neoScore', label: 'Near-Earth object likelihood', unit: '%', description: 'Scout score indicating the likelihood of a near-Earth orbit.' },
        { key: 'neo1kmScore', label: 'NEO larger than 1 km likelihood', unit: '%', description: 'Scout score for an NEO with an estimated size greater than 1 km.' },
        { key: 'phaScore', label: 'Potentially hazardous asteroid likelihood', unit: '%', description: 'Scout score indicating the likelihood of a potentially hazardous asteroid classification.' },
        { key: 'ieoScore', label: 'Interior-Earth object likelihood', unit: '%', description: 'Scout score indicating the likelihood of an Atira-type orbit.' },
        { key: 'geocentricScore', label: 'Earth-bound orbit likelihood', unit: '%', description: 'Scout score indicating the likelihood of a geocentric orbit.' },
        { key: 'tisserandScore', label: 'Comet-like orbit likelihood', unit: '%', description: 'Scout score indicating a Jupiter Tisserand parameter below 3.' },
      ],
    },
    {
      title: 'Orbit fit',
      icon: 'pi pi-check-circle',
      fields: [
        { key: 'rmsN', label: 'Normalized RMS', description: 'Normalized residual error for the astrometric orbit fit.' },
      ],
    },
  ];
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

  hasValue(value: ScoutValue | undefined): boolean {
    return value !== null && value !== undefined && value !== '';
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

  constructor() {
    this.store.load();
  }
}
