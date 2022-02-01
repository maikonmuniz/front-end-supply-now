import {useState} from "react"
import Input from "./Input"

function ProductForm({handleSubmit, prodData, btnText}){

    const [product, setProduct] = useState({})
    const [preview, setPreview] = useState([])
    
    function onFileChange(e){
        console.log(Array.from(e.target.files))
        setPreview(Array.from(e.target.files))
        setProduct({...product, images: [...e.target.files]})
    }

    function handleChange(e){
        setProduct({...product, [e.target.name]: e.target.value})
    }

    function submit(e){
        e.preventDefault()
        console.log(product)
        handleSubmit(product)
    }

    return(
        <section>
    <form onSubmit={submit}>
    
    <div> 
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={product.name}
                key={`${product.name}+${index}`}
              />
            ))
          : product.images &&
            product.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/product/${image}`}
                alt={product.name}
                key={`${product.name}+${index}`}
              />
            ))}
    
        </div>


            <Input  
                text="Nome"
                type="text"
                name="name"
                handleOnChange={handleChange}
                value={product.name || ''}
                
            />

            <Input  
                text="Preço"
                type="number"
                name="price"
                handleOnChange={handleChange}
                value={product.price || ''}
            />

            <Input  
                text="Descrição"
                type="text"
                name="description"
                handleOnChange={handleChange}
                value={product.description || ''}
            />

            <Input
            text="Imagens do Produto"
            type="file"
            name="images"
            handleOnChange={onFileChange}
            multiple={true}
            />

            <input type="submit" value={btnText}/>
            </form>
        </section>

        
    )
}

export default ProductForm