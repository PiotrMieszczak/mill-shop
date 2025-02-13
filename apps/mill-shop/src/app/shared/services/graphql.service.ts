import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentNode, WatchQueryOptions, OperationVariables } from '@apollo/client/core';

@Injectable({ providedIn: 'root' })
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  query<T, V extends OperationVariables = OperationVariables>(
    query: DocumentNode,
    variables?: V
  ): Observable<T> {
    return this.apollo
      .watchQuery<T, V>({ query, variables } as WatchQueryOptions<V, T>)
      .valueChanges.pipe(map((result) => result.data));
  }
}