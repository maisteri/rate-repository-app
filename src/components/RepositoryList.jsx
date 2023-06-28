import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate()

  const handlePress = (id) => () => {
    navigate(`/repositories/${id}`)
  }

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable onPress={handlePress(item.id)}>
          <RepositoryItem {...item} />
        </Pressable>
      )}
    />
  )
}

const RepositoryList = () => {
  const { repositories } = useRepositories()
  return <RepositoryListContainer repositories={repositories} />
}

export default RepositoryList
