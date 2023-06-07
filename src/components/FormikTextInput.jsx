import { StyleSheet } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    marginTop: Constants.statusBarHeight / 2,
    marginLeft: Constants.statusBarHeight / 2,
    marginRight: Constants.statusBarHeight / 2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    padding: Constants.statusBarHeight / 2,
  },
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
    marginLeft: Constants.statusBarHeight / 2,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
