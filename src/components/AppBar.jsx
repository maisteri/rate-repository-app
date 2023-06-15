import { View, StyleSheet, ScrollView } from 'react-native'
import { Link } from 'react-router-native'
import Constants from 'expo-constants'
import AppBarTab from './AppBarTab'
import theme from '../theme'
import Text from './Text'
import useUserInfo from '../hooks/useUserInfo'
import { useAuthStorage } from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'

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
  const { me } = useUserInfo()
  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  const onLogout = () => {
    authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  console.log(me?.username)
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
        {me?.username ? (
          <AppBarTab onPress={onLogout}>
            <Text color='textAppBar' fontWeight='bold' fontSize='subheading'>
              Sign Out
            </Text>
          </AppBarTab>
        ) : (
          <AppBarTab>
            <Link to='/signin'>
              <Text color='textAppBar' fontWeight='bold' fontSize='subheading'>
                Sign In
              </Text>
            </Link>
          </AppBarTab>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
