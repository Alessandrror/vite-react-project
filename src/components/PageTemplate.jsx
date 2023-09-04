export const Header = () => {
  return (
    <header className="border-b border-white h-12 w-full flex p-3 justify-between items-center">
      <div className="w-8 h-8 flex">
        {/* <button className="text-white">
          Menu
        </button> */}
        <a href="/">
          <img src="/rocket-header-logo.png" alt="header rocket logo"/>
        </a>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"><a href="/home">Home</a></li>
          <li className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"><a href="/about">About</a></li>
          <li className="text-transparent text-sm bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </header>
  )
}

export const Main = ({ children }) => {
  return (
    <main className="w-full flex justify-between min-h-screen">
      {children}
    </main>
  )
}

export const Footer = () => {
  return (
    <footer className="border-t border-white h-60 w-full flex p-3 justify-between items-center">
      <h1 className="text-white">Footer</h1>
    </footer>
  )
}