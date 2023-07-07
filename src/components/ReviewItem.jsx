import { View, StyleSheet } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import { parseISO, format } from 'date-fns'
import { useLocation } from 'react-router-native'
import ReviewActionButtons from './ReviewActionButtons'

const width = 55
const height = 55

const styles = StyleSheet.create({
  rating: {
    width: width,
    height: height,
    borderColor: '#0366d6',
    borderWidth: 2,
    borderRadius: width / 2,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  ratingText: {
    textAlign: 'center',
  },
  basicInfo: {
    paddingLeft: Constants.statusBarHeight / 2,
    flex: 7,
  },
  container: {
    padding: Constants.statusBarHeight,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  text: {
    paddingTop: Constants.statusBarHeight / 2,
  },
})

const ReviewItem = ({ user, createdAt, text, rating, repository, id }) => {
  const { pathname } = useLocation()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.rating}>
          <Text
            fontWeight='superBold'
            color='primary'
            fontSize='subheading'
            style={styles.ratingText}
          >
            {rating}
          </Text>
        </View>
        <View style={styles.basicInfo}>
          <Text fontWeight='bold'>
            {pathname === '/myreviews' ? repository.fullName : user.username}
          </Text>
          <Text>{format(parseISO(createdAt), 'dd.MM.yyyy')}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
      {pathname === '/myreviews' ? (
        <ReviewActionButtons repositoryId={repository.id} id={id} />
      ) : null}
    </>
  )
}

export default ReviewItem
