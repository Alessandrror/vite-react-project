import { useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { HolderCard, AnimeCard } from "./Cards"

const CardsContainer = ( { endpoint } ) => {

  const holders = []
  for (let i = 0; i < 10; i++) {
    holders.push(<HolderCard key={i} />)
  }

  const { data, loading, error } = useFetch(API, endpoint)

  useEffect(() => {

    if (error) {
      console.log(error)
    }

    if (!loading && data) {
      // console.log(data)
    }

  }, [data, loading, error])

  const handlerMouseOn = (e) => {
    // console.log(!e)
  }

  return (
    //bg-slate-700
    <div className="w-full flex flex-wrap justify-center gap-5 my-5">
      {
        loading ? (
          holders.map(component => component)
        ) : (
          data?.data.map(({ attributes, id }) => <AnimeCard key={id} id={id} attributes={attributes} handler={handlerMouseOn} />)
        )
      }
    </div>
  )
}

export default CardsContainer