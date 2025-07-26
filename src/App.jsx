import './assets/Styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Stat from './pages/Stat'
import Net from './pages/Net'
import Port from './pages/Port'
import Shdsl from './pages/Shdsl'
import Switch from './pages/Switch'
import Atu from './pages/Atu'
import Poepse from './pages/Poepse'
import Cycles from './pages/Cycles'
import Signals from './pages/Signals'
import Power from './pages/Power'
import Service from './pages/Service'
import LoginForm from './pages/LoginForm'

export default function App() {
  console.log('App render')
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LoginForm}/>
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
        </Routes>
      </Router>
    </>
  )
}