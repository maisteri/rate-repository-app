import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2,
    paddingLeft: Constants.statusBarHeight / 2,
    paddingBottom: Constants.statusBarHeight / 2,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-start',
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab>
          <Link to='/'>
            <Text color='textAppBar' fontWeight='bold' fontSize='subheading'>
              Repositories
            </Text>
          </Link>
        </AppBarTab>
        <AppBarTab>
          <Link to='/signin'>
            <Text color='textAppBar' fontWeight='bold' fontSize='subheading'>
              Sign In
            </Text>
          </Link>
        </AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
