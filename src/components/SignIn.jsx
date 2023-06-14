import Text from './Text'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { Pressable, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'

const styles = StyleSheet.create({
  submitButton: {
    margin: Constants.statusBarHeight / 2,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 5,
    padding: Constants.statusBarHeight / 1.5,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  errorText: {
    marginTop: 5,
  },
})

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

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
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text fontWeight='bold' color='textAppBar'>
          Sign In
        </Text>
      </Pressable>
    </View>
  )
}

export default SignIn
