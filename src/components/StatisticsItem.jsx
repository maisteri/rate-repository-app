import { View, StyleSheet } from 'react-native'
import Text from './Text'

const styles = StyleSheet.create({
  statistics: {
    alignItems: 'center',
  },
})

const StatisticsItem = (props) => {
  return (
    <View style={styles.statistics}>
      <Text fontWeight='bold'>
        {props.figure < 1000
          ? props.figure
          : `${(props.figure / 1000).toFixed(1)}k`}
      </Text>
      <Text>{props.label}</Text>
    </View>
  )
}

export default StatisticsItem
