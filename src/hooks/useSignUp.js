import { CREATEUSER } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATEUSER)

  const signUp = async ({ username, password }) => {
    await mutate({
      variables: { user: { username, password } },
    })
  }

  return [signUp, result]
}

export default useSignUp
