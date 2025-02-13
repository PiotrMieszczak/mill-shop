import { gql } from "apollo-angular";

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