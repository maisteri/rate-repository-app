import { gql } from '@apollo/client'

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const CREATEUSER = gql`
  mutation createUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
    }
  }
`

export const DELETEREVIEW = gql`
  mutation deleteReview($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`

export const REVIEW = gql`
  mutation review($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`
