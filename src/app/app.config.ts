import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })),
  ],
};
