import BigBlueButton from './BigBlueButton'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View } from 'react-native'
import * as yup from 'yup'
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const SignUp = () => {
  const [signUp] = useSignUp()
  const [signIn] = useSignIn()

  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values
    console.log(values)

    try {
      await signUp({ username, password })
      await signIn({ username, password })
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  }

  return <SignInContainer onSubmit={onSubmit} />
}

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().min(5).max(30).required('Username is required'),
    password: yup.string().min(5).max(50).required('Password is required'),
    passwordConfirmation: yup
      .string()
      .min(5)
      .max(50)
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password is required'),
  })

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const LoginForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput
        name='passwordConfirmation'
        placeholder='Password confirmation'
        secureTextEntry
      />
      <BigBlueButton onPress={onSubmit} buttonText='Sign In' />
    </View>
  )
}

export default SignUp
