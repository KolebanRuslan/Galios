import { useState } from 'react'
import Button from '../../components/Button/Button'
import PoepseMonitorSubpage from './PoepseMonitorSubpage'
import PoepseSubpage from './PoepseSubpage'
import PoeStatus from '../../components/PoePse/PoeStatus/PoeStatus'
import Navbar from '../../components/Navbar/Navbar'

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
      <Navbar />
      <div className='poepse'>
        <PoeStatus />
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