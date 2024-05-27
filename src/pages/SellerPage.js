import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import CreateProduct from "../components/modals/CreateProduct";
import CreateType from "../components/modals/CreateType";
import { fetchUsersProducts } from '../http/productApi';
import ProductItem from '../components/ProductItem';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Seller = observer(() => {
    const { product } = useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)

    useEffect(() => {
        // console.log('start')
        fetchUsersProducts().then(data => product.setUserProducts(data))
        // console.log(product.userProducts)
    }, [productVisible])

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
                <ProductItem key={productb.id} product={productb}/>
            )}
            </Row>
        </Container>
    );
});

export default Seller;