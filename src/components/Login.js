import React from "react"
import "../css/login.css"
import { login } from "../services/apiRequests"
import parseJwt from "../util/parseJwt"

const Login = ({setUser}) => {
  const username = React.useRef(null)
  const password = React.useRef(null)
  const handleLogin = (e) => {
    e.preventDefault()
    login(username.current.value, password.current.value)
      .then((res) => {
        if (res === undefined) return
        let credentials = parseJwt(res)
        setUser(credentials)
      })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div id="login">
      <div className="position-absolute top-0 start-0 w-100 h-100" />
      <section className=" w-75
    position-absolute top-50 start-50 translate-middle">
        <h2 className="text-center">Iniciar Sesión</h2>
        <form className="border-2" onSubmit={handleLogin}>
          <div className="mb-3 mt-3">
            <input ref={username} type="text" className="form-control" id="formGroupExampleInput" placeholder="Usuario" />
          </div>
          <div className="mb-3 mt-3">
            <input ref={password} type="password" className="form-control" id="formGroupExampleInput2" placeholder="Contraseña" />
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </section>
    </div>
  )
}
export default Login