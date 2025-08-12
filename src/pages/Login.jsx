import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Button from '../components/Button/Button'
import { useAuth } from '../hooks/UseAuth'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [password, setPassword] = useState('')
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  async function onSubmitForm(e){
      e.preventDefault()
      try {
          const response = await axios.post('checkpassword', `${password}`)
          if (response.data === 'OK') {
            setAuth({ token: `token_${password}`})
            navigate('/stat')
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Ошибка',
              text: 'Не верный пароль'
            })
            navigate('/')
          }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Ошибка',
          text: error
        })
      }
  }

  return (
    <div className='auth-form'>
      <form onSubmit={onSubmitForm}>
        <h2>Авторизация</h2>
        <div className='auth-form-fields'>
          <label htmlFor='password' className='auth-form-label'>Пароль</label>
          <input
            onChange={e => {setPassword(e.target.value)}}
            type='password'
            className='auth-form-control'
            id='password'
          />
        </div>
        <Button>
          Войти
        </Button>
      </form>
    </div>
  )
}

export default Login