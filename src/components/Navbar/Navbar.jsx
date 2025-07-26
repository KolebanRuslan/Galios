import { NavLink } from 'react-router-dom'
import { SideBarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
  console.log('Navbar render')
  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className='nav-text'>
                  <NavLink to={item.path} className={({isActive}) => '' + (isActive ? 'active' : '')}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
