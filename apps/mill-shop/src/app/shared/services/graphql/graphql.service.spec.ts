import { TestBed } from '@angular/core/testing';
import { Apollo, QueryRef } from 'apollo-angular';
import { of } from 'rxjs';
import { GraphqlService } from './graphql.service';
import { DocumentNode, gql, ApolloQueryResult } from '@apollo/client/core';

describe('GraphqlService', () => {
  let service: GraphqlService;
  let apolloMock: jest.Mocked<Apollo>;

  beforeEach(() => {
    apolloMock = {
      watchQuery: jest.fn(),
    } as unknown as jest.Mocked<Apollo>;

    TestBed.configureTestingModule({
      providers: [{ provide: Apollo, useValue: apolloMock }, GraphqlService],
    });

    service = TestBed.inject(GraphqlService);
  });

  it('should call Apollo watchQuery and return data', (done) => {
    const mockQuery: DocumentNode = gql`
      query ExampleQuery {
        exampleData {
          field1
          field2
        }
      }
    `;

    const mockResponse: ApolloQueryResult<unknown> = {
      data: {
        exampleData: [
          { field1: 'value1', field2: 'value2' },
          { field1: 'value3', field2: 'value4' },
        ],
      },
      loading: false,
      networkStatus: 7, // Apollo's default "ready" network status
    };

    const mockQueryRef: Partial<QueryRef<unknown>> = {
      valueChanges: of(mockResponse),
    };

    apolloMock.watchQuery.mockReturnValue(mockQueryRef as QueryRef<unknown>);

    service.query<unknown>(mockQuery).subscribe((data) => {
      expect(data).toEqual(mockResponse.data);
      expect(apolloMock.watchQuery).toHaveBeenCalledWith({
        query: mockQuery,
        variables: undefined,
      });
      done();
    });
  });
});
