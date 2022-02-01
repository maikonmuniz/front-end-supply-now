import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
function MyProducts(){
    const [products, setProducts] = useState([])

    return(
        <section>
            <h1>MyProducts</h1>
            <div><Link to="/product/add">Cadastrar Produtos</Link></div>
            <div>{products.lenght > 0 && <p>Produtos cadastrados</p>}
            {products.length === 0 && <p>Não há produtos cadastrados </p>}</div>

        </section>
    )
}

export default MyProducts