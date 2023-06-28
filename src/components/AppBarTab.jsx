import { Pressable, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  item: {
    paddingRight: Constants.statusBarHeight,
  },
})

const AppBarTab = (props) => {
  return (
    <Pressable style={styles.item} onPress={props.onPress}>
      {props.children}
    </Pressable>
  )
}

export default AppBarTab
