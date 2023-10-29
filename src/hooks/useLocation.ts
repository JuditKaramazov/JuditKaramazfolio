import { useEffect, useState } from 'react';
import locationData from '../../_content/location.json'

export type Location = {
  country: string
  city: string
  country_code: string
  date_start: string
  date_end: string
}

export type UseLocation = {
  now: Location
}

export const useLocation = () => {
  const [location, setLocation] = useState<UseLocation>()

  useEffect(() => {
    async function fetchData() {
      try {
        setTimeout(() => {
          setLocation(locationData)
        }, 1000)
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchData()
  }, [])

  return {
    now: location?.now,
  }
}
