import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ScoutApiResponse, ScoutObject } from '../models/scout-object.model';

const SCOUT_API_URL = 'https://ssd-api.jpl.nasa.gov/scout.api';
 
const PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(SCOUT_API_URL)}`;

 

@Injectable({ providedIn: 'root' })
export class ScoutApiService {
  private readonly http = inject(HttpClient);

  getObjects(): Observable<ScoutObject[]> {
    return this.http.get<ScoutApiResponse>(SCOUT_API_URL).pipe(
      map(({ data = [] }) =>
        data.map((object) => ({
          ...object,
          lastRunTimestamp: object.lastRunTimestamp ?? object.lastRun ?? null,
        })),
      ),
    );
  }
}
