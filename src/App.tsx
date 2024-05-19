import { useEffect, useState } from 'react'

function App() {

  const baseDivider = 1000

  const ameliaBornDate = new Date(2024, 3, 14, 5, 21)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [ameliaAge, setAmeliaAge] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    //@ts-ignore
    setAmeliaAge(Math.abs(currentDate - ameliaBornDate))
  }, [currentDate])

  return <div className='d-flex h-100 w-100 justify-content-center'>
    <div className='h-100 d-flex flex-column justify-content-center'>
      <p>{ameliaBornDate.toLocaleString('hu-HU', { timeZone: 'Europe/Warsaw' })}</p>
      <p>{currentDate.toLocaleString('hu-HU', { timeZone: 'Europe/Warsaw' })}</p>
      <p>{ameliaAge.toLocaleString()} ms</p>
      <p>{Math.floor(ameliaAge / baseDivider).toLocaleString()} s</p>
      <p>{Math.floor(ameliaAge / (baseDivider * 60)).toLocaleString()} m</p>
      <p>{Math.floor(ameliaAge / (baseDivider * 60 * 60)).toLocaleString()} h</p>
      <p>{Math.floor(ameliaAge / (baseDivider * 60 * 60 * 24)).toLocaleString()} days</p>
      <p>{Math.floor(ameliaAge / (baseDivider * 60 * 60 * 24 * 7)).toLocaleString()} weeks</p>
    </div>
  </div>

}

export default App
