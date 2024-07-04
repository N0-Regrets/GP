import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {AuthenticationInterceptorService} from "./services/authentication-interceptor.service";

export const appConfig: ApplicationConfig = {
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptorService, multi: true},
    provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), provideAnimationsAsync(),]
};
