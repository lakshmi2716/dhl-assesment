export type ScoutValue = string | number | null;

export interface ScoutObject {
  objectName?: ScoutValue;
  nObs?: ScoutValue;
  arc?: ScoutValue;
  ra?: ScoutValue;
  dec?: ScoutValue;
  Vmag?: ScoutValue;
  rate?: ScoutValue;
  elong?: ScoutValue;
  unc?: ScoutValue;
  uncP1?: ScoutValue;
  H?: ScoutValue;
  rating?: ScoutValue;
  caDist?: ScoutValue;
  moid?: ScoutValue;
  vInf?: ScoutValue;
  neoScore?: ScoutValue;
  neo1kmScore?: ScoutValue;
  phaScore?: ScoutValue;
  ieoScore?: ScoutValue;
  geocentricScore?: ScoutValue;
  tisserandScore?: ScoutValue;
  rmsN?: ScoutValue;
  lastRunTimestamp?: ScoutValue;
  lastRun?: ScoutValue;
}

export interface ScoutApiResponse {
  data?: ScoutObject[];
  count?: string;
  signature?: {
    version: string;
    source: string;
  };
}
