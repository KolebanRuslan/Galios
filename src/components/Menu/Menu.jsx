import './Menu.css'
import Button from '../Button/Button'
import { useState } from 'react'

export default function Menu() {
  const [mainLayoutContent, setMainLayoutContent] = useState('')

  function handleClick(type) {
    setMainLayoutContent(type)
  }

  return (
    <div className='menu'>
      <Button onClick={() => handleClick('Stat')}>Статистика</Button>
      <Button onClick={() => handleClick('Net')}>Сеть</Button>
      <Button onClick={() => handleClick('Prots')}>Сетевые порты</Button>
      <Button onClick={() => handleClick('Switch')}>Свитчи</Button>
      <p>{mainLayoutContent}</p>
    </div>
  )
}