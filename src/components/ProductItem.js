import React from 'react';
import {Card, Col} from "react-bootstrap"
import Image from "react-bootstrap/Image"
import {useNavigate} from "react-router-dom"
import {PRODUCT_ROUTE} from "../utils/consts"

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-5"} 
        onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}
        >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={product.img}/>
                <div>{product.name}</div>
                <div>{product.price} руб.</div>
            </Card>
        </Col>
    );
};

export default ProductItem;