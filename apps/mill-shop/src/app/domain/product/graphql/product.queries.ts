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

export const GET_PRODUCT_DETAILS = gql`
  query getProductDetails($categorySlug: String!, $productSlug: String!) {
    product(categorySlug: $categorySlug, slug: $productSlug) {
      name
      image
      description
      price
    }
  }
`;

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($categorySlug: String!, $productSlug: String!) {
    products(filter: { category: { slug: $categorySlug }, slug_not: $productSlug }, limit: 3) {
      slug
      name
      image
    }
  }
`;
