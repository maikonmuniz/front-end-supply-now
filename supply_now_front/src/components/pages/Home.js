
import api from '../../utils/api'
import style from './Home.module.css'
import { useState, useEffect } from 'react'

// import styles from './Home.module.css'


 
function Home(){

    const [products, setProducts] = useState([])

    useEffect(() => {
      api.get('products/productall').then((response) => {
         setProducts(response.data.products)
      })
    }, [])
  
    return(
        <section className={style.container}>
           
                {products.length > 0 && 
                    products.map((product) => (
                        <div className={style.product_style}>
                        <img
                            src={`${process.env.REACT_APP_API}images/product/${product.images[0]}`}
                            alt={product.name}
                            width="190px"/>
                        
                        <p className={style.name_product}>{product.name} </p>
                        <p className={style.price_product}>R$ {product.price}</p>

                        <input type='submit' value='Add'/>
                
                        </div>
                    ))
 
                }
          
        </section>
    )
}

export default Home