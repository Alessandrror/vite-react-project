import { useState } from 'react'
import { InputFields, ButtonFields } from './components/LoginFields'

const Login = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const loginFields = [
  {
    type: 'text',
    placeholder: 'Type username',
    handler: (e) => setUsername(() => e.target.value)
  },
  {
    type: 'password',
    placeholder: 'Type password',
    handler: (e) => setPassword(() => e.target.value)
  }
]

const logIn = () => {
  if (!username || !password) return

  if (username !== 'username' || password !== 'password') {
    setUsername(() => '')
    setPassword(() => '')
    return
  }

  window.location.href = '/about'
}

return (
  <>
    <div id="outer-bg" className="bg-white flex flex-col justify-center m-20 rounded-lg max-w-screen-sm" >
      <div className="block">
        <img src="/login.png" alt="login image" className="w-full"/>
      </div>
      <div className="grid gap-10 m-20">
        {loginFields.map( ({ type, placeholder, handler }, i) => <InputFields key={i} type={type} placeholder={placeholder} handler={handler} />)}
        <ButtonFields styles={"bg-gradient-to-r from-purple-600 to-blue-600 text-blue-50 p-3 rounded-md border-black outline-none"} handler={() => logIn()}>Log In</ButtonFields>
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-center" href="/restore-password">Forgot your password?</a>
      </div>
    </div>
  </>
)
}

export default Login

