import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, EMPTY, pipe, switchMap, tap } from 'rxjs';
import { ScoutApiService } from '../service/scout-api.service';
import { ScoutObject } from '../models/scout-object.model';

interface ScoutState {
  objects: ScoutObject[];
  loading: boolean;
  error: string | null;
}

const initialState: ScoutState = {
  objects: [],
  loading: false,
  error: null,
};

export const ScoutStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ objects }) => ({
    objectCount: computed(() => objects().length),
  })),
  withMethods((store, scoutApi = inject(ScoutApiService)) => ({
    load: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          scoutApi.getObjects().pipe(
            tap((objects) => patchState(store, { objects, loading: false })),
            catchError(() => {
              patchState(store, {
                loading: false,
                error: 'Unable to load Scout data. Please try again.',
              });
              return EMPTY;
            }),
          ),
        ),
      ),
    ),
  })),
);
