import api from '../../../utils/api'
import { useState } from 'react'
import ProductForm from "../../form/ProductForm"
import { useNavigate } from 'react-router-dom'
function AddProduct(){

    const [token] = useState(localStorage.getItem('token') || '')
    const navigate = useNavigate()
    let msgerro = ""

    async function registerProduct(product){

        const formData = new FormData()

        await Object.keys(product).forEach((key) => {
            if(key === `images`){
                for (let i = 0; i < product[key].length; i++) {
                    formData.append(`images`, product[key][i])
                  }
            }else{
                formData.append(key, product[key])
            }
        })

        const data = await api.post('products/register', formData, {
            headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
            'Content-Type': 'multipart/form-data',
        },
        })
        .then((response) => {
            console.log(response.data)
            return response.data 
        })
        .catch((err) => {
            msgerro = "erro"
            console.log(err)
            return err.response.data    
        })

        if(msgerro !== "erro"){
            navigate('/')
        }
    }
    return(
        <section>
            <h1>Cadastrar Produtos</h1>
            <ProductForm handleSubmit={registerProduct} btnText="Cadastra Produtos"/> 
        </section>
    )
}

export default AddProduct