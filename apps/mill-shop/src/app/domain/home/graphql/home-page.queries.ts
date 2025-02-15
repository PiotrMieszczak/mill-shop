import { gql } from 'apollo-angular';

export const GET_HOME_PAGE = gql`
  query getHomePage {
    page(where: { slug: "home-page" }) {
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

export const GET_TOP_CATEGORIES = gql`
  query {
    categories(first: 3, orderBy: name_ASC) {
      id
      slug
      name
      image {
        url
        fileName
      }
    }
  }
`;
