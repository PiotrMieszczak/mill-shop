import { gql } from 'apollo-angular';

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($slug: String!) {
    products(where: { category: { slug: $slug } }) {
      id
      slug
      name
      description
      price
      image {
        url
        fileName
      }
      category {
        slug
        name
      }
    }
  }
`;
