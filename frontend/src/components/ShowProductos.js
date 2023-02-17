import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import ModalForm from './modal_add_producto'

const endpoint = 'http://localhost:8000/api'

const ShowProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {
        const response = await axios.get(endpoint + '/productos')
        setProductos(response.data)
    }

    const deleteProducto = async (id) => {
        await axios.delete(endpoint + '/producto/' + id)
        getAllProductos()
    }

    return (
        <div className='container p-4'>
            <div className='d-grid gap-2'>
                <table className='table table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Detalle</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Deshabilitado</th>
                            <th>Acciones</th>
                        </tr>
                        <tr className='table-active'>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td><ModalForm></ModalForm></td>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td> {producto.id} </td>
                                <td> {producto.nombre} </td>
                                <td> {producto.detalle} </td>
                                <td> {producto.stock} </td>
                                <td> {producto.precio} </td>
                                <td> {producto.deshabilitado} </td>
                                <td>
                                    <Link to={'editar/' + (producto.id)} className='btn btn-outline-warning me-2'>Editar</Link>
                                    <button onClick={() => deleteProducto(producto.id)} className="btn btn-outline-danger">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShowProductos