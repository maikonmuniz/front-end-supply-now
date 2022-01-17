import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar_logo}>Supply Now</h1>
            <ul>
            <li>
                <Link to="/">Produtos</Link>
            </li>
            <li>
                <Link to="/Register">Cadastro</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar