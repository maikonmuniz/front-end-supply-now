import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
import { useContext } from 'react'
import logo from "../../assets/img/logo.png"

//context 
import {Context} from '../../context/UserContext'


function Navbar(){

    const { authenticated, logout } = useContext(Context)

    return (

        <nav className={styles.navbar}>
            <img className={styles.navbar_logo} src={logo}/>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            {authenticated ? (
            <>
            <li>
                <Link to="/product/myproducts">Meus Produtos</Link>
            </li>
            <li>
                <Link to="/user/profile">Perfil</Link>
            </li>
            <li onClick={logout}>
                <Link className={styles.input} to="/">Sair</Link>
            </li>
            </>
            ) : (
            <>
            <li>
                <Link to="/Register">Cadastro</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            </>)}

            </ul>
        </nav>
    )
}

export default Navbar