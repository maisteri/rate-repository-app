import { useQuery } from '@apollo/client'
import { GET_USER } from '../graphql/queries'

const useUserInfo = () => {
  const { data, loading } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  })
  const me = !loading ? data.me : undefined

  return { me, loading }
}

export default useUserInfo
