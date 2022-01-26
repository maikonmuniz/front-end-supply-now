import {useState, useEffect} from "react"
import styleForm from '../../form/Form.module.css'
import Input from '../../form/Input'
import api from '../../../utils/api'

function handleChange(e){

}

function Profile(){
    const [user, setUser] = useState({})
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get('users/checkuser', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            }
        }).then((response) => {
            setUser(response.data)
                })
    }, [token])

    return(
        <section>
            <h1>Profile</h1>
            
                
        <form className={styleForm.form_container}> 
        <Input 
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
          value={user.name || ''}/>
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
          value={user.email || ''}/>
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ''}/>

        <Input
          text="CPF"
          type="text"
          name="cpf"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
        />

        <Input
          text="Tipo"
          type="text"
          name="tipo"
          placeholder="Digite o seu telefone"
          handleOnChange={handleChange}
          value={user.tipo || ''}
        />

        <input type="submit" value="Editar"/>
        </form>
        </section>
    )
}

export default Profile