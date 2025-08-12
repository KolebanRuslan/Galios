import { useEffect, useState } from 'react'
import './PoeStatus.css'

export default function PoeStatus() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch('getpoestatus')
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
    };

    fetchData()

    const intervalId = setInterval(fetchData, 5000)
    return () => clearInterval(intervalId)
  }, []);

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='poepse-status' style={data?.Vin < 44 ? {backgroundColor: '#f7b7b7'} : {}}>
      V<sub>in</sub>&nbsp;= {data?.Vin} В&nbsp;&nbsp;&nbsp;
      I<sub>sum</sub> = {data?.Isum} A&nbsp;&nbsp;&nbsp;
      P<sub>sum</sub> = {data?.Psum} Вт&nbsp;&nbsp;&nbsp;
      P<sub>sw</sub> = {data?.Psw} Вт
    </div>
  )
}