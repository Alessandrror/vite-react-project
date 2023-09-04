import { useState } from "react"

export const HolderCard = () => {
  return (
    <div className="w-80 h-80 bg-slate-500 rounded-md">
      {/* <div className="h-72 p-5"></div> */}
    </div>
  )
}

export const AnimeCard = ({ id, attributes, handler }) => {

  const [mouseOn, setMouseOn] = useState(false)

  const triggerEvent = (val) => {
    setMouseOn(val)
    handler(mouseOn)
  }

  return (
    <a id={id} className="w-80 h-80 bg-slate-800 rounded-md flex flex-col cursor-pointer" onMouseEnter={() => triggerEvent(true)} onMouseLeave={() => triggerEvent(false)} href={`/anime/${id}`}>
      <img src={attributes?.coverImage?.tiny || '/image-card-not-found.png'} alt={`${attributes?.canonicalTitle} Image`} width="100%" className="rounded-t-md bg-black h-16"/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 p-5 rounded-md text-md text-start h-14">{attributes?.titles?.en_jp}</span>
      <span className="text-white text-sm overflow-auto px-5 mb-4 text-justify">{attributes?.description}</span>
    </a>
  )
}

export const AnimeCardHover = ({ attributes }) => {
  return (
    <a className="w-80 h-80 bg-slate-800 rounded-md flex flex-col cursor-pointer">
      <img src={attributes?.coverImage?.tiny || '/image-card-not-found.png'} alt={`${attributes?.canonicalTitle} Image`} width="100%" className="rounded-t-md bg-black h-72"/>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-md text-md text-start h-14">{attributes?.titles?.en_jp}</span>
    </a>
  )
}

// ease-in-out duration-300 h-72 hover:h-16