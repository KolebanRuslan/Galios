import './assets/Styles/App.css'
import Header from './components/header/header'
import Menu from './components/Menu/Menu'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className='sideBar'>
          <Menu />
        </div>
        <div className='mainLayout'>
          {/* {mainLayoutContent} */}
        </div>
      </main>
    </>
  )
}