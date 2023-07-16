import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          fullName
          language
          description
          ownerAvatarUrl
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  query repository($first: Int, $after: String, $id: ID!) {
    repository(id: $id) {
      id
      fullName
      language
      description
      ownerAvatarUrl
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

// export const GET_USER = gql`
//   query {
//     me {
//       id
//       username
//     }
//   }
// `

export const GET_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            createdAt
            text
            rating
            repository {
              ownerName
              name
              fullName
              id
            }
          }
        }
      }
    }
  }
`
