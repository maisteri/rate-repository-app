import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../hooks/useRepositories'
import { useNavigate } from 'react-router-native'
import RepoListSorter from './RepoListSorter'
import { useState } from 'react'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.appBarBackground,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({
  repositories,
  setOrderBy,
  setOrderDirection,
}) => {
  const navigate = useNavigate()

  const handlePress = (id) => () => {
    navigate(`/repositories/${id}`)
  }

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <>
      <RepoListSorter
        setOrderBy={setOrderBy}
        setOrderDirection={setOrderDirection}
      />
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
    </>
  )
}

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = useState('DESC')
  const { repositories } = useRepositories(orderBy, orderDirection)
  return (
    <RepositoryListContainer
      repositories={repositories}
      setOrderBy={setOrderBy}
      setOrderDirection={setOrderDirection}
    />
  )
}

export default RepositoryList
