import React from 'react'
import DeviceName from '../DeviceName/DeviceName'
import './Header.css'
import { useAuth } from '../../hooks/UseAuth'

function Header() {
  const { auth } = useAuth()

  if (!auth.token) {
    return null
  }
  return (
    <header>
      <DeviceName />
    </header>
  )
}

export default React.memo(Header)