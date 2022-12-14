import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

export const GET_CATEGORY_PRODUCTS = gql`
  query GetProducts($input: CategoryInput) {
    category(input: $input) {
      products {
        id
        name
        brand
        gallery
        attributes {
          items {
            displayValue
            value
          }
          type
          name
        }
        prices {
          amount
          currency {
            symbol
          }
        }
        inStock
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query GetCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetailById($productId: String!) {
    product(id: $productId) {
      id
      name
      gallery
      brand
      description
      inStock
      attributes {
        items {
          displayValue
          value
        }
        type
        name
      }
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
`;
