import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'

import { useAuth } from '../../hooks/useAuth'

const HomePage = () => {
  const dispatch = useDispatch()

  const { isAuth, email } = useAuth()

  return (
    <div>
      <h1>Home</h1>

      {isAuth ? (
        <button onClick={() => dispatch(removeUser())}>
          Выйти из {email}{' '}
        </button>
      ) : (
        <Link to='/travel-app/login'>Войти</Link>
      )}
    </div>
  )
}

export default HomePage
