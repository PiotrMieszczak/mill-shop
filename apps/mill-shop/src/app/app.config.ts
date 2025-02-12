import { ApplicationConfig, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpHeaders, provideHttpClient } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { provideApollo } from 'apollo-angular';

const YOUR_GRAPHQL_API_ENDPOINT = 'https://eu-west-2.cdn.hygraph.com/content/cm6zgb76x03f507w9i8rj9d66/master';
const TOKEN  = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzkzNzg2MjQsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY202emdiNzZ4MDNmNTA3dzlpOHJqOWQ2Ni9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZmNiNjQ2MWMtMzc1OS00ZTMxLWIwNDYtYjY0OTY1YTFlNTc2IiwianRpIjoiY203MjU0ZnZiMDFnMDA3bDlhYTJ4M2U3bCJ9.VhrjiKsGhocvzF2xOxJim-KXawHEyzuLEm1ZgzrCjZu455Ej92u_BpitxIDmzN3CQBVJEn_quvR-Ulxcsq18uLju6HIF_oZ5lBrNPDiQpZtEjPCimDKDQegLwB0yVfoTlzgkSjPuUIP1hHquEQSkRIeJ6COdYpwKNJkV00z8fDyRJzksU3Kps1lKGUFc8pE7_QNgepGY7xsWTTXHlbviVW9-L0HEHRQUCU0J5pT98XFHE-siDmIkd3Pj5YF_dNgGFz42JIJ6AqJ14QbpxCgZAeH23SMYENl_XnnL32kivqgI1i-yFPh69Bm5PaEsRa8rj0y7saJ33c4he1QVpmiz5zrvwN3YesWDcvNxaF9pD3nStvpuxU25vh2LdqmM6cxqGvYu6nxnkvlXtIVyI7Wdzx5CIZ6Zod4pv6ZfhTSMXsLK4rYjac66kKoDdYgCPP_TZgHEYWFQ3puluvr_ztYuClwIyILC7TrdXjDjy3quEiEnYjfCNYyauMVo5UIiIMU_Gq-HfsgD5KuKcN4gbSCHdBE-OPfP7b6zJ6ABpicaIIhYjQa7-vRoPY1paygalxJAV-R5pZMaexXhedlFKOed52yCrTdSIPYf8SIYQKMBkFyxveTPkBqP_J1e2XlCHX4YwfyZwKtAfI3J6OTG3q196EIbl-aw0pHIbQu5pDRVW_8';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({ uri: YOUR_GRAPHQL_API_ENDPOINT, headers: new HttpHeaders().set( 'Authorization', `Bearer ${TOKEN}`) }),
        cache: new InMemoryCache(),
      };
    }),
  ],
};
