import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'
import BigBlueButton from './BigBlueButton'
import * as Linking from 'expo-linking'
import { View } from 'react-native'
import Text from './Text'
import { StyleSheet, FlatList } from 'react-native'
import Constants from 'expo-constants'
import { parseISO, format } from 'date-fns'
import theme from '../theme'

const width = 66
const height = 66

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
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

const ItemSeparator = () => <View style={styles.separator} />

const ReviewItem = ({ user, createdAt, text, rating }) => {
  return (
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
        <Text fontWeight='bold'>{user.username}</Text>
        <Text>{format(parseISO(createdAt), 'dd.MM.yyyy')}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
}

const RepositorySingleView = () => {
  const { id } = useParams()
  const { repository, loading } = useRepository(id)

  if (loading) return null

  const reviews = repository.reviews.edges.map((edge) => edge.node)

  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem {...item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => (
          <>
            <RepositoryItem {...repository} />
            <BigBlueButton
              onPress={() => Linking.openURL(repository.url)}
              buttonText='Open in Github'
            />
            <ItemSeparator />
          </>
        )}
        // ...
      />
    </>
  )
}

export default RepositorySingleView
