import { useEffect, useState } from 'react'
import {
  
  
  onAuthStateChanged,
  
  updateProfile,
} from 'firebase/auth'

import { AuthContext } from './AuthContext'
import {auth} from '../Firebase/firebase.config'
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  
  

  
  

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    
    updateUserProfile,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
