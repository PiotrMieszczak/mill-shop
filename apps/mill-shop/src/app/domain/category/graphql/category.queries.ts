import { gql } from 'apollo-angular';

export const GET_CATEGORIES = gql`
  query {
    categories {
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
