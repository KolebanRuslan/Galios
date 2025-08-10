import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/UseAuth'

const PrivateRoute = () => {
  const { auth } = useAuth()
  
  if (!auth.token) {
    return <Navigate to='/' />
  }

  return <Outlet />
}

export default PrivateRoute