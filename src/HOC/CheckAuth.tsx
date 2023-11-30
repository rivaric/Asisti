import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface ChildrenProps {
  children: JSX.Element
}

export const CheckAuth = ({ children }: ChildrenProps) => {
  const navigate = useNavigate()
  const pathname = useLocation()

  useEffect(() => {
    !localStorage.getItem('access') ? navigate('/login') : null
  }, [navigate, pathname])

  return <>{children}</>
}
