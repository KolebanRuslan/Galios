import Navbar from '../components/Navbar/Navbar'
import { useAppSelector } from '../hooks/UseAppSelector'


function Stat() {
  const deviceName = useAppSelector((state) => state.deviceName)
  return (
    <>
      <Navbar />
      <div className='stat'>
        <h1>Stat</h1>
        <p>Device Name: {deviceName.name ?? 'Not found'}</p>
      </div>
    </>
  )
}

export default Stat
