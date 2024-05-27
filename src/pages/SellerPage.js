import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import { deleteProductSell, fetchUsersProducts } from '../http/productApi';
import ProductItem from '../components/ProductItem';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Seller = observer(() => {
    const { product } = useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        fetchUsersProducts().then(data => product.setUserProducts(data))
    }, [render, productVisible])

    const deleteOne = (id) => {
        deleteProductSell({ id })
    }

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setProductVisible(true)}
            >
                Добавить продукт
            </Button>
            <CreateType show={typeVisible}
                onHide={() => setTypeVisible(false)}
            />
            <CreateProduct show={productVisible}
                onHide={() => setProductVisible(false)}
            />
            <h2 className='mt-5'>Ваши продукты в продаже</h2>
            <Row className="d-flex">
                {product.userProducts.map(productb =>
                    <Col key={productb.id * 100}>
                        <ProductItem key={productb.id} product={productb} />
                        <Button key={productb.id * 1000} onClick={() => { deleteOne(productb.id); setRender(!render) }} className="me-2">
                            Удалить
                        </Button>
                    </Col>
                )}
            </Row>

        </Container>
    );
});

export default Seller;