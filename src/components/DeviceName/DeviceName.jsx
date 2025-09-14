import { useEffect, useState } from 'react'
import './DeviceName.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { deviceNameActions } from './slice'

export default function DeviceName() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('getversion')
        setData(response.data)
        dispatch(deviceNameActions.setDeviceName({name: response.data}))
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

  return (
    <>
      <div className='device-name'>{data}</div>
    </>
  )
}