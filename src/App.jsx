import './assets/Styles/App.css'
import Header from './components/header/header'
import Navbar from './components/Navbar/Navbar'
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

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <main>
          <Navbar />
          <Routes>
            <Route path='/' exact Component={Stat}/>
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
        </main>
      </Router>
    </>
  )
}