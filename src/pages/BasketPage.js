import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Modal } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ProductList from "../components/ProductList"
import { observer } from 'mobx-react-lite'
import Pages from "../components/Pages";
import ProductItem from '../components/ProductItem'
import { deleteProduct, fetchBasket } from '../http/basketApi'
import { Context } from "../index"
import { useParams } from 'react-router-dom'



const BasketPage = observer(() => {

  const { product } = useContext(Context)
  const [smShow, setSmShow] = useState(false)
  const [render, setRender] = useState(false)
  // const { id } = useParams()


  useEffect(() => {
    fetchBasket().then(data => product.setBasket(data))
  }, [render])

  const deleteOne = (id) => {
    deleteProduct({id})
  }

  let totalCost = 0
  product.basket.forEach(element => {
    totalCost += element.price
  });
  return (
    <Container>
      <h2 className='mt-5'>Корзина</h2>
      <Row className="d-flex">
        {product.basket.map(productb =>
          <Col key={productb.id*100}>
            <ProductItem key={productb.id} product={productb} />
            <Button key={productb.id*1000} onClick={() => {deleteOne(productb.id); setRender(!render)}} className="me-2">
              Удалить
            </Button>
          </Col>
        )}
      </Row>
      <h3 className='mt-5'>Сумма заказа составит: {totalCost} руб.</h3>
      <Button onClick={() => setSmShow(true)} className="me-2">
        Купить
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Заказ на пути к вам!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Вы сделали заказ товаров из своей корзины. Оплата прошла успешно! </Modal.Body>
      </Modal>
    </Container>
  )
})

export default BasketPage