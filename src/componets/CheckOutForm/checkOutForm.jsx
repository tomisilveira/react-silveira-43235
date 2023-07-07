import { useState } from "react"
import Button from "react-bootstrap/esm/Button"

const CheckOutForm=({onConfirm})=>{
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')

    const handleConfirm=(event)=>{
        event.preventDefault()
        console.log('apretamos')
        const userData={
            name,phone,email
        }
        onConfirm(userData)
    }

    return(
        <div>
            <form onSubmit={handleConfirm} className="Form">
            <label >Nombre
            <input 
            className='input'
            type="text"
            value={name}
            onChange={({target})=>setName(target.value)}
            />
            </label>
            <label>Teléfono
            <input 
            className='input'
            type="text"
            value={phone}
            onChange={({target})=>setPhone(target.value)}
            />
            </label>
            <label >Email
            <input 
            className='input'
            type="text"
            value={email}
            onChange={({target})=>setEmail(target.value)}
            />
            </label>
            <div className='Label'>
                <Button type='submit' className="Button">Crear Orden</Button>
            </div>
            </form>
        </div>
    )
}

export default CheckOutForm