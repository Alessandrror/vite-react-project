import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const LabelGenres = ({ genre }) => {

  const { data, loading, error } = useFetch(API, genre)

  useEffect(() => {
    if (!loading && data) {
      data?.data.forEach(genre => {
        // console.log(genre?.attributes?.name)
      })
    }
  }, [data, loading, error])

  return (
    <>
      {loading ? (
        <div className="text-white text-2xl">XD</div>
      ) : (
        data?.data.map( ({ attributes, id }) => {<span key={id} id={id} className="text-white text-2xl">{attributes?.name}</span>})
      )}
    </>
  )
}

export default LabelGenres