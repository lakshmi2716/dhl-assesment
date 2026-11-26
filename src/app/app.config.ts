import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import { provideRouter, withHashLocation } from '@angular/router';

import CustomPreset from '../styles/theme/custom-preset';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes,withHashLocation()),
    providePrimeNG({
      theme: {
        preset: CustomPreset,
        options: {
          darkModeSelector: false 
        }
      },
    }),
    MessageService
  ]
};
