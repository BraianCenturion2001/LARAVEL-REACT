import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FormAddProducto from './form_add_producto';

function ModalForm(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agregar un Producto
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FormAddProducto></FormAddProducto>
            </Modal.Body>
        </Modal>
    );
}

function ButtonAddProducto() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-success text-white" onClick={() => setModalShow(true)}>
                Agregar Producto
            </Button>

            <ModalForm
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ButtonAddProducto

