import { FlatList } from 'react-native'
import ReviewItem from './ReviewItem'
import ItemSeparator from './ItemSeparator'
import useUserInfo from '../hooks/useUserInfo'

const MyReviews = () => {
  const { me } = useUserInfo(true)
  const reviews = me ? me.reviews.edges.map((edge) => edge.node) : []
  return (
    <>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem {...item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </>
  )
}

export default MyReviews
