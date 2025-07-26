import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button/Button"

function LoginForm(){
    console.log('LoginForm render')
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()
        try {
            console.log('LoginForm Submited render')
            const requestBody = {password}
            const response = await axios.post('https://68849795745306380a38ba67.mockapi.io/api/v1/password', requestBody)
            if (response.data.password === '0000') {
              navigate('/stat')
            } else {
              Swal.fire({
                icon: "error",
                title: "Ошибка",
                text: "Не верный пароль"
            })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Ошибка",
                text: error
            })
            navigate('/')
        }
    }

    return (
        <div className='auth-form'>
            <form onSubmit={handleLogin}>
                <h2>Авторизация</h2>
                <div className="auth-form-fields">
                    <label htmlFor="password" className="auth-form-label">Пароль</label>
                    <input onChange={e => {setPassword(e.target.value)}} type="password" className="auth-form-control" id="password"/>
                </div>
                <Button>
                  Войти
                </Button>
            </form>
        </div>
    )
}

export default LoginForm