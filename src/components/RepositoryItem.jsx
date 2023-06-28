import { View } from 'react-native'
import Text from './Text'
import { Image, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import StatisticsItem from './StatisticsItem'

const styles = StyleSheet.create({
  pic: {
    width: 66,
    height: 66,
  },
  basicInfo: {
    paddingLeft: Constants.statusBarHeight / 2,
    flex: 1,
  },
  container: {
    padding: Constants.statusBarHeight,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  language: {
    backgroundColor: '#0000FF',
    width: '30%',
  },
  statistics: {
    flexDirection: 'row',
    paddingBottom: Constants.statusBarHeight / 2,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
})

const RepositoryItem = (props) => {
  return (
    <View testID='repositoryItem'>
      <View style={styles.container}>
        <Image style={styles.pic} source={{ uri: props.ownerAvatarUrl }} />
        <View style={styles.basicInfo}>
          <Text fontWeight='bold'>{props.fullName} </Text>
          <Text>{props.description} </Text>
          <Text fontWeight='bold' color='textAppBar' style={styles.language}>
            {props.language}{' '}
          </Text>
        </View>
      </View>
      <View style={styles.statistics}>
        <StatisticsItem figure={props.stargazersCount} label='Stars' />
        <StatisticsItem figure={props.forksCount} label='Forks' />
        <StatisticsItem figure={props.reviewCount} label='Reviews' />
        <StatisticsItem figure={props.ratingAverage} label='Rating' />
      </View>
    </View>
  )
}

export default RepositoryItem
