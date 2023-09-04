export const InputFields = ({ type, placeholder, handler } ) => {
  return (
    <input type={type} placeholder={placeholder} onChange={handler} className="p-3 pl-0 bg-white border-b-2 border-b-gray-400 outline-none" autoComplete="off" />
  )
}

export const ButtonFields = ({ styles, handler, children } ) => {
  return (
    <button className={styles} onClick={handler} >{children}</button>
  )
}