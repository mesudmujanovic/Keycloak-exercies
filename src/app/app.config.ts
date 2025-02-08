import { APP_BOOTSTRAP_LISTENER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { KeycloakService } from './service/keycloak.service';
import { kcFactory } from '../factories/kcFactory';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: kcFactory,
      deps: [KeycloakService],
      multi: true,
    },
  ]
};
