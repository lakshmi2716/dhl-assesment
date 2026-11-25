import { ColDef, ValueGetterParams } from 'ag-grid-community';
import { ScoutObject, ScoutValue } from './scout-object.model';

type NumericScoutField = Exclude<keyof ScoutObject, 'objectName' | 'ra' | 'lastRun' | 'lastRunTimestamp'>;

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

export const scoutColumnDefs: ColDef<ScoutObject>[] = [
  {
    field: 'objectName',
    headerName: 'Object',
    headerTooltip: 'Select an object to view its full Scout assessment',
    width: 170,
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
  numericColumn('nObs', 'Observations', 'Total number of optical astrometric observations reported', 125),
  numericColumn('arc', 'Arc (h)', 'Observation arc length in hours between the first and last observation', 115),
  numericColumn('rating', 'Impact rating', 'Scout hazard rating; higher values indicate an elevated short-term impact possibility', 145),
  numericColumn('caDist', 'Close approach (LD)', 'Median Earth close-approach distance in Lunar Distances (1 LD ≈ 384,400 km)', 175),
];
