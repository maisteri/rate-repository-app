import { Searchbar } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

const styles = StyleSheet.create({
  menuButton: {
    padding: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.menuBarBackGround,
    display: 'flex',
  },
})

const SearchMenuBar = ({ searchKeyword, setSearchKeyword }) => {
  const onChangeSearch = (query) => {
    setSearchKeyword(query)
  }

  return (
    <View style={styles.menuButton}>
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchKeyword}
      />
    </View>
  )
}

export default SearchMenuBar
