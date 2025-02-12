import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { provideApollo } from 'apollo-angular';

const YOUR_GRAPHQL_API_ENDPOINT = 'https://eu-west-2.cdn.hygraph.com/content/cm6zgb76x03f507w9i8rj9d66/master';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({ uri: YOUR_GRAPHQL_API_ENDPOINT }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
