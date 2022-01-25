import {useState, useContext} from 'react'
import Input from '../../form/Input'
import { Link } from 'react-router-dom'

import styles from '../../form/Form.module.css'
import {Context} from '../../../context/UserContext'

function Login(){

    const [dados, setDados] = useState({})
    const {login} = useContext(Context)

    function handleChange(e){
        setDados({...dados,  [e.target.name]: e.target.value})
  
    }

    function handleSubmit(e){
        e.preventDefault()
        login(dados)
    }

    return(
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input 
                text="E-mail"
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
                handleOnChange={handleChange}/>

                <Input 
                text="senha"
                type="password"
                name="password"
                placeholder="Digite sua senha"
                handleOnChange={handleChange}/> 

            <input type="submit" value="Entrar"/>

            <p>Não tem conta? <Link to="/register">Clique</Link></p>
            </form>
        </section>
    )
}

export default Login