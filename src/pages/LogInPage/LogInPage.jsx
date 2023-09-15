import { Link } from 'react-router-dom'

import Login from '../../components/Login'

const LogInPage = () => {
  return (
    <main>
      <h1>Log In</h1>
      <Login />
      <Link to={`/travel-app/register`}>Регистрация</Link>
    </main>
  )
}

export default LogInPage
