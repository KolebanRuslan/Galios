import './assets/Styles/App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Stat from './pages/Stat'
import Net from './pages/Net'
import Port from './pages/Port'
import Shdsl from './pages/Shdsl'
import Switch from './pages/Switch'
import Atu from './pages/Atu'
import Poepse from './pages/Poepse/Poepse'
import Cycles from './pages/Cycles'
import Signals from './pages/Signals'
import Power from './pages/Power'
import Service from './pages/Service'
import UserProvider from './auth/userProvider'
import PrivateRoute from './auth/PrivateRoute'
import Header from './components/Header/Header'

export default function App() {

  return (
    <UserProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path='/stat' Component={Stat}/>
            <Route path='/net' Component={Net}/>
            <Route path='/port' Component={Port}/>
            <Route path='/shdsl' Component={Shdsl}/>
            <Route path='/switch' Component={Switch}/>
            <Route path='/atu' Component={Atu}/>
            <Route path='/poepse' Component={Poepse}/>
            <Route path='/cycles' Component={Cycles}/>
            <Route path='/signals' Component={Signals}/>
            <Route path='/power' Component={Power}/>
            <Route path='/service' Component={Service}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}