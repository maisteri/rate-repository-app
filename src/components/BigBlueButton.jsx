import { Pressable, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'

const styles = StyleSheet.create({
  bigBlueButton: {
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

const BigBlueButton = ({ onPress, buttonText }) => {
  return (
    <Pressable style={styles.bigBlueButton} onPress={onPress}>
      <Text fontWeight='bold' color='textAppBar'>
        {buttonText}
      </Text>
    </Pressable>
  )
}

export default BigBlueButton
