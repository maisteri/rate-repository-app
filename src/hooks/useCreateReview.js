import { REVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useCreateReview = () => {
  const [mutate, result] = useMutation(REVIEW)

  const review = async ({ repositoryName, ownerName, rating, text }) => {
    const { data } = await mutate({
      variables: { review: { repositoryName, ownerName, rating, text } },
    })

    return { data }
  }

  return [review, result]
}

export default useCreateReview
