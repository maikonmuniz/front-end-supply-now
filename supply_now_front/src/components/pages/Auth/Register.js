import { useState } from 'react'
import Input from '../../form/Input'

import styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState({})

function handleChange(e){
  setUser({...user, [e.target.name]: e.target.value })
}

function handleSubmit(e){
  e.preventDefault()
  console.log(user)
}

  return (
    <>
    <section className={styles.form_container}>
        <form onSubmit={handleSubmit}>
        <p>Registrar</p>      
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Confirme a sua senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
        <p>Já tem conta? clique aqui</p>
        </form>


        
    </section>  

    </>
  )
}

export default Register