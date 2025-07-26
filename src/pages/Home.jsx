import React from 'react'
import Header from '../components/header/header'
import Navbar from '../components/Navbar/Navbar'

function Home() {
  return (
    <>
      <Header />
      <Navbar />
    </>
  )
}

export default React.memo(Home)
