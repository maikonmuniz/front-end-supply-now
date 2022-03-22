import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import api from '../../../utils/api'
import RoundedImage from '../../layout/RoundedImage'

function MyProducts(){
    const [products, setProducts] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('products/productCompanyAll', {
            headers: {
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
          .then((response) => {
            setProducts(response.data.products)
          })
      }, [token])

    return(
        <section>
            <h1>MyProducts</h1>
            <div><Link to="/product/add">Cadastrar Produtos</Link></div>

            <div>
            {products.length > 0 &&     
            products.map((product) => (
                  <div>
                       <RoundedImage
                            src={`${process.env.REACT_APP_API}/images/product/${product.images[0]}`}
                            alt={product.name}
                            width="75px"
                        />
                        <span className='bold'>{product.name}</span>
                    </div>
                    ))}
            {products.length === 0 && <p>Não há produtos cadastrados</p>}
            </div>

        </section>
    )
}

export default MyProducts
