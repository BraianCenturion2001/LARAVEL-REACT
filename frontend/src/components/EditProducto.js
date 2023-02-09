import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/producto/'

const EditProducto = () => {
    const [nombre, setNombre] = useState('')
    const [detalle, setDetalle] = useState('')
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            detalle: detalle,
            precio: precio,
            stock: stock
        })
        navigate('/')
    }

    useEffect(() => {
        const getProductoById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setDetalle(response.data.detalle)
            setPrecio(response.data.precio)
            setStock(response.data.stock)
        }

        getProductoById()

    }, [])


    return (
        <div>
            <h3>Editar Producto</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Detalle</label>
                    <input value={detalle} onChange={(e) => setDetalle(e.target.value)} type="text" className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Precio</label>
                    <input value={precio} onChange={(e) => setPrecio(e.target.value)} type="number" className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input value={stock} onChange={(e) => setStock(e.target.value)} type="number" className='form-control'></input>
                </div>
                <button type='submit' className='btn btn-outline-success'>Editar</button>
            </form>
        </div>
    )
}


export default EditProducto