import { gql } from 'apollo-angular';

// TODO I don't know why Hygraph doesn't allow to return direct count of products. To investigate
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
      product {
        slug
      }
    }
  }
`;
