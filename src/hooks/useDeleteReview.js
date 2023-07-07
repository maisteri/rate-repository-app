import { DELETEREVIEW } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETEREVIEW)

  const deleteReview = async (id) => {
    const { data } = await mutate({
      variables: { deleteReviewId: id },
    })

    return { data }
  }

  return [deleteReview, result]
}

export default useDeleteReview
