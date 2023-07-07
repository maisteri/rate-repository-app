import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme'
import { Route, Routes, Navigate } from 'react-router-native'
import SignIn from './SignIn'
import SignUp from './SignUp'
import RepositorySingleView from './RepositorySingleView'
import Review from './Review'
import MyReviews from './MyReviews'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.textAppBar,
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route
          path='/repositories/:id'
          element={<RepositorySingleView />}
          exact
        />
        <Route path='/myreviews' element={<MyReviews />} exact />

        <Route path='/signup' element={<SignUp />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/review' element={<Review />} exact />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main
