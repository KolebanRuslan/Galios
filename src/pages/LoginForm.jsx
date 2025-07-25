import { useState } from "react"
import axios from "axios"
import { StrictMode } from 'react'
import ReactDOM from "react-dom"
import Swal from "sweetalert2"
import App from "../App"

function LoginForm(){

    const [password, setPassword] = useState("")

    async function handleLogin(e){
        e.preventDefault()
        try {
            const rootElement = document.getElementById("root");
            const requestBody = {password}
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', requestBody)
            if (response) {
              ReactDOM.render(
                <StrictMode>
                  <App />
                </StrictMode>,
                rootElement
              )
            }
            //navigate('/stat')
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: ""
            });
        }
    }

    return (
        <div className="container" style={{marginTop:"10vh"}}>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="form-control" id="password"/>
                </div>
                <button type="submit" className="btn btn-primary">LOG IN</button>
            </form>
        </div>
    )
}

export default LoginForm