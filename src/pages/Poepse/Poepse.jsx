import { useState } from 'react'
import Button from '../../components/Button/Button'
import Home from '../Home'
import PoepseMonitorSubpage from './PoepseMonitorSubpage'
import PoepseSubpage from './PoepseSubpage'

function Poepse() {
  const [content, setContent] = useState(PoepseSubpage)
  const [contentType, setContentType] = useState('PoepseSubpage')

  function clickOnPoePse() {
    setContentType('PoepseSubpage')
    setContent(PoepseSubpage)
  }

  function clickOnPoePseMonitor() {
    setContentType('PoepseMonitorSubpage')
    setContent(PoepseMonitorSubpage)
  }

  return (
    <>
      <Home />
      <div className='poepse'>
        <div className='poepse__buttons'>
          <Button onClick={clickOnPoePse} isActive={contentType === 'PoepseSubpage'}>
            POE/PSE
          </Button>
          <Button onClick={clickOnPoePseMonitor} isActive={contentType === 'PoepseMonitorSubpage'}>
            Монитор
          </Button>
        </div>
        <div className='poepse__content'>{ content }</div>
      </div>
    </>
  )
}

export default Poepse