import { Pressable, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  item: {
    paddingRight: Constants.statusBarHeight / 2,
  },
})

const AppBarTab = (props) => {
  return (
    <Pressable
      style={styles.item}
      onPress={() => console.log('me was pressed')}
    >
      {props.children}
    </Pressable>
  )
}

export default AppBarTab
