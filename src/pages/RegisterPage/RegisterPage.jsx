import { Link } from 'react-router-dom'

import Signup from '../../components/Signup'

const RegisterPage = () => {
  return (
    <main>
      <h1>Register</h1>
      <Signup />
      <Link to={`/travel-app/login`}> Войти</Link>
    </main>
  )
}

export default RegisterPage
