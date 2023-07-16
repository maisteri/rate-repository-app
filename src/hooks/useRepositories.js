// import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
  }
  //   const [repositories, setRepositories] = useState()
  //   const [loading, setLoading] = useState(false)

  //   const fetchRepositories = async () => {
  //     setLoading(true)

  //     // Replace the IP address part with your own IP address!
  //     const response = await fetch('http://192.168.1.11:5000/api/repositories')
  //     const json = await response.json()

  //     setLoading(false)
  //     setRepositories(json)
  //   }

  //   useEffect(() => {
  //     fetchRepositories()
  //   }, [])
}

export default useRepositories
