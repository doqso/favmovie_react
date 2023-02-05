import React from "react"
import "../css/login.css"

const Login = () => (
    <div id="login">
        <div className="position-absolute top-0 start-0 w-100 h-100" />
        <section className=" w-75
    position-absolute top-50 start-50 translate-middle">
            <h2>Login</h2>
            <form className="border-2">
                <div className="mb-3 mt-3">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Usuario" />
                </div>
                <div className="mb-3 mt-3">
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Contraseña" />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </section>
    </div>
)
export default Login