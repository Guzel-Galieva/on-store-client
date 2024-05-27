import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, ToggleButton } from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from "../http/productApi";
import { addProductB } from '../http/basketApi';

const ProductPage = () => {
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])


    const addProductToBasket = () => {
        addProductB({id})
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image width={600} height={600} src={'http://localhost:5000/' + product.img} className='m-3' />
                </Col>
                {/* <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                    </Row>
                </Col> */}
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around m-5"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>{product.price} руб.</h3>
                        {/* <Button variant={"outline-dark"} onClick={() => addProductToBasket()}>Добавить в корзину</Button> */}
                        <ToggleButton
                            className="mb-2"
                            id="toggle-check"
                            type="checkbox"
                            variant="outline-primary"
                            checked={checked}
                            value="1"
                            onChange={(e) => setChecked(e.currentTarget.checked)}
                            onClick={addProductToBasket}
                        >
                            Добавить в корзину
                        </ToggleButton>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column align-items-center m-3">
                <h1>{product.name}</h1>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h3>Можно связаться по телефону:</h3>
                <h5>{product.phone}</h5>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Описание</h2>
                <h5>{product.description}</h5>
            </Row>
        </Container>
    );
};

export default ProductPage;
