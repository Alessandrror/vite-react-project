import { useEffect } from "react"
import useFetch from "./hooks/useFetch"
import LabelGenres from "./components/LabelGenres"

const Information = ({ endpoint }) => {

  const pageId = location.href.split('/').pop()

  const { data, loading, error } = useFetch(API, `${endpoint}/${pageId}`)

  useEffect(() => {
    if (error) {
      console.log(error)
    }

    if (!loading && data) {
      // console.log(data)
    }
  }, [data, loading, error])

  return (
    <div className="flex flex-col">
      <img src={data?.data?.attributes?.coverImage?.large} alt={`${data?.data?.attributes?.canonicalTitle} Image`} className="h-1/5" />
      <div className="w-full h-full p-20">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-start text-2xl">{data?.data?.attributes?.canonicalTitle}</h1>
        {!loading && (<LabelGenres genre={`anime/${pageId}/genres`}></LabelGenres>)}
        <p className="text-white text-md mt-5">{data?.data?.attributes?.description}</p>
      </div>
    </div>
  )
}

export default Information