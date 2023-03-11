import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PlusCircle } from 'react-bootstrap-icons';

const endpoint = 'http://localhost:8000/api/producto'

function ModalForm(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setNombre] = useState('')
    const [detalle, setDetalle] = useState('')
    const [precio, setPrecio] = useState(0)
    const [stock, setStock] = useState(0)

    /*VALIDACION*/
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault()
            handleClose()
            await axios.post(endpoint, { nombre: nombre, detalle: detalle, precio: precio, stock: stock })
        }

        setValidated(true);
    };

    return (
        <>
            <Button variant="outline-success text-white" onClick={handleShow}>
                <PlusCircle size={18} /> Agregar Producto
            </Button>

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Agregar un Producto
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Nombre del Producto:</Form.Label>
                                <Form.Control value={nombre} onChange={(e) => setNombre(e.target.value)} required type="text" autoComplete='off' />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Imagen del Producto:</Form.Label>
                                <Form.Control type="file" />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Precio del Producto:</Form.Label>
                                <Form.Control value={precio} onChange={(e) => setPrecio(e.target.value)} required type="number" min={0} autoComplete='off' />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Stock Inicial:</Form.Label>
                                <Form.Control value={stock} onChange={(e) => setStock(e.target.value)} required type="number" min={0} autoComplete='off' />
                                <Form.Control.Feedback type="invalid">
                                    Por favor, complete este campo.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Descripción del Producto: </Form.Label>
                            <Form.Control value={detalle} onChange={(e) => setDetalle(e.target.value)} required as="textarea" rows={3} />
                            <Form.Control.Feedback type="invalid">
                                Por favor, complete este campo.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-danger" className='me-2' onClick={handleClose}>Cancelar</Button>
                        <Button variant="outline-info" type="submit">Agregar</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default ModalForm

