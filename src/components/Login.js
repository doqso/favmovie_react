import React from "react"
import { useNavigate } from "react-router-dom";
import { getTokenFromApi } from "../services/apiRequests"
import { useAuth } from "../custom_hooks/useAuth";
import "../css/login.css"

export default function Login() {
  const { login, logout } = useAuth();
  const username = React.useRef(null)
  const password = React.useRef(null)
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    getTokenFromApi(username.current.value, password.current.value)
      .then((data) => {
        if (data === "") return logout();
        else {
          login(data);
          navigate("/genre/12?page=1")
        }
      })
  }
  return (
    <div id="login">
      <div className="position-absolute top-0 start-0 w-100 h-100" />
      <section className=" w-75
    position-absolute top-50 start-50 translate-middle">
        <h2 className="text-center">Iniciar Sesión</h2>
        <form className="border-2" onSubmit={handleLogin}>
          <div className="mb-3 mt-3">
            <input ref={username} type="text" className="form-control text-light" id="formGroupExampleInput" placeholder="Usuario" />
          </div>
          <div className="mb-3 mt-3">
            <input ref={password} type="password" className="form-control text-light" id="formGroupExampleInput2" placeholder="Contraseña" />
          </div>
          <button type="submit" className="btn btn-primary">Acceder</button>
        </form>
      </section>
    </div>
  )
}