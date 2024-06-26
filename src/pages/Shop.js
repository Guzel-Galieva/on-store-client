import React, { useContext, useEffect } from 'react'
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TypeBar from "../components/TypeBar";
import ProductList from "../components/ProductList"
import { observer } from 'mobx-react-lite'
import {Context} from "../index"
import {fetchProducts, fetchTypes} from "../http/productApi"
import Pages from "../components/Pages"


const Shop = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchProducts(null, 1, 20).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])


    useEffect(() => {
        fetchProducts(product.selectedType.id, product.page, 20).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar style={{ position: "fixed" }}/>
                </Col>
                <Col md={9}>
                    <ProductList />
                    <Pages/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop