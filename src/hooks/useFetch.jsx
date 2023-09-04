import { useEffect, useState } from "react";

const useFetch = ( { url, accept, content_type }, endpoint ) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchAPI = async () => {
      try {
        const data = await fetch(`${url}/${endpoint}`, {
          headers: {
            "Accept": accept,
            "Content-Type": content_type
          }
        })

        const json = await data.json()

        // console.log(json)
        setData(json)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchAPI()
  }, [url, accept, content_type, endpoint])

  return { data, loading, error }
}

export default useFetch