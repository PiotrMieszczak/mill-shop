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
  query getProductDetails($productSlug: String!) {
    product(where: { slug: $productSlug }) {
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

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($categorySlug: String!, $productSlug: String!) {
    products(where: { category: { slug: $categorySlug }, slug_not: $productSlug }, first: 3) {
      slug
      name
      price
      description
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
