import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};