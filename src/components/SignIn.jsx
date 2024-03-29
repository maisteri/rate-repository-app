import BigBlueButton from './BigBlueButton'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View } from 'react-native'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
import { Navigate } from 'react-router-native'
import { useState } from 'react'

const SignIn = () => {
  const [signIn] = useSignIn()
  const [loggedIn, setLoggedIn] = useState(false)

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      setLoggedIn(true)
    } catch (e) {
      console.log(e)
    }
  }

  if (loggedIn) return <Navigate to='/' replace />

  return <SignInContainer onSubmit={onSubmit} />
}

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  }

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
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
      <BigBlueButton onPress={onSubmit} buttonText='Sign In' />
    </View>
  )
}

export default SignIn
