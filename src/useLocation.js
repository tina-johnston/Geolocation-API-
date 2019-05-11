import { useState, useEffect } from 'react'

export default () => {
  const [lat, setLat] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      //success callback
      position => setLat(position.coords.latitude),
      //failure callback
      err => setErrorMessage(err.message)
    )
  }, [])
  return [lat, errorMessage]
}
