import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useUserInfo = (includeReviews = false) => {
  const { data, loading, refetch } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews,
    },
  })
  const me = !loading ? data.me : undefined

  return { me, loading, refetch }
}

export default useUserInfo
