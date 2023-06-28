import BigBlueButton from './BigBlueButton'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View } from 'react-native'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import useCreateReview from '../hooks/useCreateReview'

const Review = () => {
  const [review] = useCreateReview()
  const navigate = useNavigate()
  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    const realValues = {
      ownerName,
      repositoryName,
      text,
      rating: Number(rating),
    }
    console.log(realValues)
    try {
      const { data } = await review(realValues)
      const repoId = data.createReview.repositoryId
      navigate(`/repositories/${repoId}`)
    } catch (e) {
      console.log(e)
    }
  }

  return <ReviewContainer onSubmit={onSubmit} />
}

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
  }

  const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup.number().min(0).max(100).required('Rating is required'),
  })

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const ReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline />
      <BigBlueButton onPress={onSubmit} buttonText='Create a review' />
    </View>
  )
}

export default Review
