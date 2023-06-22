import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react-native'
import { SignInContainer } from '../components/SignIn'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn()
      render(<SignInContainer onSubmit={onSubmit} />)
      // screen.debug()

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'atte')
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password')
      fireEvent.press(screen.getByText('Sign In'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
      })
    })
  })
})
