import { ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const WithAccess = ({ children }: { children: ReactNode }) => {
  const access = localStorage.getItem('access_token')
  const navigate = useNavigate()
  useEffect(() => {
    if (!access) {
      localStorage.removeItem('access_token')
      navigate('/login')
    }
  }, [access, navigate])

  return <>{children}</>
}
