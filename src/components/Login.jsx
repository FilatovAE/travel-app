import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userSlice'

import { useNavigate } from 'react-router-dom'

import Form from './Form'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          })
        )
        navigate('/travel-app/')
      })
      .catch(alert('не верный пользователь'))
  }

  return <Form title='Войти' handleClick={handleLogin} />
}

export default Login
