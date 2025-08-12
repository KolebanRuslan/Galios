import { useEffect, useState } from 'react'
import './PoeTable.css'

export default function PoeTable() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch('getpoeportstat')
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
          }
          const result = await response.json()
          setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <div>Loading data...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const renderedItems = []

  function handleSelected(index, e) {
    if (e.target.nodeName !== 'INPUT') {
      setSelected(index)
    }
  }

  data.forEach((item, index) => {
    if (item.poe !== '0') {
      renderedItems.push(
        <tbody onClick={(e) => handleSelected(index, e)} key={index}>
          <tr sw={item.switch} p={item.port} pair='A' className={index === selected ? 'selected' : ''}>
            <td rowSpan={2}>
              <input type='checkbox' id={`${item.switch}|${item.port}`} input='' />
            </td>
            <td>{item.port} A</td>
            <td className='statusa'>{item.status_a === '1' ? 'on' : 'off'}</td>
            <td className='modea'>{item.mode_a === '1' ? 'auto' : 'manual'}</td>
            <td className='detecta'>{item.DETECT_a}</td>
            <td className='classa'>{item.CLASS_a}</td>
            <td className='vouta' style={item.Vout_a >= 20 ? {backgroundColor: '#c6ffed'} : {}}>{item.Vout_a}</td>
            <td className='ia'>{item.I_a}</td>
            <td className='pa'>{item.P_a}</td>
            <td className='statea' style={item.STATE_a === 'ERR' ? {backgroundColor: '#f7b7b7'} : {}}>{item.STATE_a}</td>
            <td className='link' style={item.link === 'up' ? {backgroundColor: '#c6ffed'} : {}} rowSpan={2}>{item.link}</td>
            <td className='speedduplex' rowSpan={2}>{item.speed_duplex}</td>
          </tr>
          <tr sw={item.switch} p={item.port} pair='B' className={index === selected ? 'selected' : ''}>
            <td>{item.port} B</td>
            <td className='statusb'>{item.status_b === '1' ? 'on' : 'off'}</td>
            <td className='modeb'>{item.mode_b === '1' ? 'auto' : 'manual'}</td>
            <td className='detectb'>{item.DETECT_b}</td>
            <td className='classb'>{item.CLASS_b}</td>
            <td className='voutb' style={item.Vout_b >= 20 ? {backgroundColor: '#c6ffed'} : {}}>{item.Vout_b}</td>
            <td className='ib'>{item.I_b}</td>
            <td className='pb'>{item.P_b}</td>
            <td className='stateb' style={item.STATE_a === 'ERR' ? {backgroundColor: '#f7b7b7'} : {}}>{item.STATE_b}</td>
          </tr>
        </tbody>
      )
    }
  })

  return (
    <>
      <table id='poepseinfo' className='poepse-table'>
        <thead>
          <tr>
            <th>Группа</th>
            <th>port pairs</th>
            <th>PoE status</th>
            <th>PoE mode</th>
            <th>discovery DETECT</th>
            <th>discovery CLASS</th>
            <th>V<sub>out</sub></th>
            <th>I [A]</th>
            <th>P [W]</th>
            <th>STATE</th>
            <th>Link</th>
            <th>Connect Speed-Duplex</th>
          </tr>
        </thead>
          {renderedItems}
      </table>
    </>
  )
}