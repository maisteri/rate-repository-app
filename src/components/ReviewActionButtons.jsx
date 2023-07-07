import React from 'react'
import { View, StyleSheet, Alert, Pressable } from 'react-native'
import Text from './Text'
import Constants from 'expo-constants'
import theme from '../theme'
import { useNavigate } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'
import useUserInfo from '../hooks/useUserInfo'

const ReviewActionButton = ({ onPress, buttonText, color }) => {
  const styles = StyleSheet.create({
    reviewActionButton: {
      marginLeft: Constants.statusBarHeight / 2,
      borderStyle: 'solid',
      borderWidth: 0.5,
      borderRadius: 5,
      padding: Constants.statusBarHeight / 2,
      backgroundColor: color,
      justifyContent: 'center',
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
    },
  })

  return (
    <Pressable style={styles.reviewActionButton} onPress={onPress}>
      <Text fontWeight='bold' color='textAppBar'>
        {buttonText}
      </Text>
    </Pressable>
  )
}

const showAlert = (onDelete) => () => {
  Alert.alert(
    'Delete review',
    'Are you sure you want to delete this review?',
    [
      {
        text: 'Delete',
        onPress: onDelete,
        style: 'cancel',
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () => {},
    }
  )
}

const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: Constants.statusBarHeight / 2,
    marginBottom: Constants.statusBarHeight / 2,
  },
})

const ReviewActionButtons = ({ repositoryId, id }) => {
  const navigate = useNavigate()
  const [deleteReview] = useDeleteReview()
  const { refetch } = useUserInfo(true)

  return (
    <View style={styles.actionsContainer}>
      <ReviewActionButton
        onPress={() => navigate(`/repositories/${repositoryId}`)}
        buttonText='View repository'
        color={theme.colors.primary}
      />
      <ReviewActionButton
        onPress={showAlert(() => {
          deleteReview(id)
          refetch()
        })}
        buttonText='Delete review'
        color={theme.colors.error}
      />
    </View>
  )
}

export default ReviewActionButtons
