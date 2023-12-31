import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'

import { useNavigate } from 'react-router-dom'

import Form from './Form'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user)
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          })
        )
        navigate('/travel-app/')
      })
      .catch(console.error)
  }

  return <Form title='Зарегистрироваться' handleClick={handleRegister} />
}

export default Signup
