import { Header, Main, Footer } from "./components/PageTemplate"

const App = ({ children }) => {

  // if (!localStorage.getItem('token')) {
  //   location.href = '/login'
  // }

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default App

