import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
// import {fetchOneDevice} from "../http/deviceAPI";

const ProductPage = () => {
    // const [device, setDevice] = useState({info: []})
    // const {id} = useParams()
    // useEffect(() => {
    //     fetchOneDevice(id).then(data => setDevice(data))
    // }, [])
    const product = {id: 1, name: 'Футболка1 Джокер', price: 112, typeId:1, description:'dsfdfsf',
    img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'}

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image width={600} height={600} src={product.img} className='m-3'/>
                </Col>
                {/* <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{product.name}</h2>
                    </Row>
                </Col> */}
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around m-5"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>{product.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column align-items-center m-3">
                <h1>{product.name}</h1>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>Описание</h2>
                <h5>{product.description}</h5>
            </Row>
        </Container>
    );
};

export default ProductPage;
