//import { createContext } from 'react'
import { useContext } from 'react'
import AuthStorageContext from '../contexts/AuthStorageContext'

//const AuthStorageContext = createContext()

export const useAuthStorage = () => {
  return useContext(AuthStorageContext)
}

export default AuthStorageContext
