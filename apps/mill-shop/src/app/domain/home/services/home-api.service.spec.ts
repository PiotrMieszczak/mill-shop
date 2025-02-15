// import { TestBed } from '@angular/core/testing';
// import { HomeApiService } from './home-api.service';
// import { GraphqlService } from '../../../shared/services/graphql.service';
// import { GET_HOME_PAGE } from '../graphql/home-page.queries';
// import { HomePageAdapter } from '../adapters';
// import { HomePage } from '../interfaces';
// import { of } from 'rxjs';
// import { HomePageDTO } from '../dto';

// describe('HomeApiService', () => {
//   let service: HomeApiService;
//   let graphqlServiceMock: jest.Mocked<GraphqlService>;

//   const mockHomePageDTO: HomePageDTO = {
//     pageTitle: 'Welcome to Mill Shop',
//     header: 'Find the best products for you',
//     slug: 'home-page',
//     banner: {
//       url: 'https://example.com/banner.jpg',
//       fileName: 'banner.jpg',
//     },
//     id: '',
//   };

//   const homePageResult: HomePage = HomePageAdapter.createHomePage(mockHomePageDTO);

//   beforeEach(() => {
//     const mockGraphqlService = {
//       query: jest.fn(),
//     };

//     TestBed.configureTestingModule({
//       providers: [HomeApiService, { provide: GraphqlService, useValue: mockGraphqlService }],
//     });

//     service = TestBed.inject(HomeApiService);
//     graphqlServiceMock = TestBed.inject(GraphqlService) as jest.Mocked<GraphqlService>;
//   });

//   it('should fetch home page data', (done) => {
//     graphqlServiceMock.query.mockReturnValue(of({ pages: mockHomePageDTO }));

//     service.getHomePageData().subscribe((homePage) => {
//       expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_HOME_PAGE, {
//         fetchPolicy: 'cache-first',
//       });
//       expect(homePage).toEqual(homePageResult);
//       done();
//     });
//   });

//   it('should handle empty response 2', (done) => {
//     graphqlServiceMock.query.mockReturnValue(of({ pages: [] }));

//     service.getHomePageData().subscribe((homePage) => {
//       expect(graphqlServiceMock.query).toHaveBeenCalledWith(GET_HOME_PAGE, {
//         fetchPolicy: 'cache-first',
//       });
//       expect(homePage).toEqual([]);
//       done();
//     });
//   });
// });
