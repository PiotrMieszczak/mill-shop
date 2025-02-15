import { gql } from 'apollo-angular';

export const GET_HOME_PAGE = gql`
  query getHomePage {
    pages(where: { slug: "home-page" }) {
      pageTitle
      header
      slug
      banner {
        url
        fileName
      }
    }
  }
`;
