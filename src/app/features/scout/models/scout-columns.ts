import { ColDef, ICellRendererParams, ValueGetterParams } from 'ag-grid-community';
import { ScoutObject, ScoutValue } from './scout-object.model';

type NumericScoutField = Exclude<keyof ScoutObject, 'objectName' | 'ra' | 'lastRun' | 'tEphem'>;

type TextScoutField = 'lastRun' | 'tEphem';

function parseNumericValue(value: ScoutValue | undefined): number | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function numericColumn(
  field: NumericScoutField,
  headerName: string,
  headerTooltip: string,
  width: number,
): ColDef<ScoutObject> {
  return {
    field,
    headerName,
    headerTooltip,
    tooltipValueGetter: ({ value, valueFormatted }) => String(valueFormatted ?? value ?? ''),
    width,
    filter: 'agNumberColumnFilter',
    floatingFilter: false,
    valueGetter: (params: ValueGetterParams<ScoutObject>) => parseNumericValue(params.data?.[field]),
  };
}

function textColumn(
  field: TextScoutField,
  headerName: string,
  headerTooltip: string,
  width: number,
): ColDef<ScoutObject> {
  return {
    field,
    headerName,
    headerTooltip,
    tooltipValueGetter: ({ value }) => String(value ?? ''),
    width,
    filter: 'agTextColumnFilter',
    floatingFilter: false,
  };
}

export const scoutColumnDefs: ColDef<ScoutObject>[] = [
  {
    field: 'objectName',
    headerName: 'Object',
    headerTooltip: 'Select an object to view its full Scout assessment',
    width: 155,
    pinned: 'left',
    lockPinned: true,
    filter: 'agTextColumnFilter',
    filterParams: {
      filterOptions: ['contains'],
      defaultOption: 'contains',
    },
    floatingFilter: false,
    cellRenderer: ({ value }: { value: ScoutValue | undefined }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'scout-object-link';
      button.textContent = String(value ?? 'Unknown object');
      button.setAttribute('aria-label', `View details for ${button.textContent}`);
      return button;
    },
  },
  numericColumn('nObs', 'Observations', 'Number of observations available', 120),
  numericColumn('arc', 'Arc (h)', 'Length of the observation data arc in hours', 105),
  numericColumn('rating', 'Impact rating', 'A rating to characterize the chances of an Earth impact', 135),
  numericColumn('caDist', 'Close approach (LD)', 'Close-approach distance to Earth in lunar distances (LD)', 165),
  {
    ...numericColumn('phaScore', 'PHA', 'Score for the object being a PHA (0–100)', 105),
    tooltipValueGetter: ({ value }) => `PHA score: ${value ?? 'N/A'}`,
    cellRenderer: ({ value }: ICellRendererParams<ScoutObject>) => {
      if (value === null || value === undefined || value === '') {
        return '<span class="pha-score-badge pha-score-badge--empty">N/A</span>';
      }

      const score = Number(value);
      const level = score > 25 ? 'high' : score > 10 ? 'medium' : 'low';
      const label = level[0].toUpperCase() + level.slice(1);
      return `<span class="pha-score-badge pha-score-badge--${level}">${label}</span>`;
    },
  },
  numericColumn('neoScore', 'NEO', 'Score for the object being a NEO (0–100)', 90),
  numericColumn('neo1kmScore', 'NEO > 1 km', 'Score for the object being an NEO larger than 1 km in diameter (0–100)', 120),
  // {
  //   ...numericColumn('neoScore', 'NEO', 'Score for the object being a NEO (0–100)', 90),
  //   valueFormatter: ({ value }) => (value == null ? '' : `${value}%`),
  // },
  // {
  //   ...numericColumn('neo1kmScore', 'NEO > 1 km', 'Score for the object being an NEO larger than 1 km in diameter (0–100)', 120),
  //   valueFormatter: ({ value }) => (value == null ? '' : `${value}%`),
  // },
  textColumn('lastRun', 'Last update (UTC)', 'Date/time of last object analysis computation (UTC)', 170),
  textColumn('tEphem', 'Ephemeris time (UTC)', 'UTC time of the current ephemeris', 180),
];
