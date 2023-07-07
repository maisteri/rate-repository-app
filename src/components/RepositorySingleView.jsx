import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'
import BigBlueButton from './BigBlueButton'
import * as Linking from 'expo-linking'
import { FlatList } from 'react-native'
import ItemSeparator from './ItemSeparator'
import ReviewItem from './ReviewItem'

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
      />
    </>
  )
}

export default RepositorySingleView
