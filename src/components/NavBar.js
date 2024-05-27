import React, { useContext } from 'react'
import { Context } from "../index"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from "react-router-dom"
import { SELLER_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from "../utils/consts"
import { Button } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"


const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(SHOP_ROUTE)
    }
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>БАРАХОЛКА</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(BASKET_ROUTE)}
                            
                        >
                            Корзина
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(SELLER_ROUTE)}
                            className="ms-4"
                        >
                            Продать
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => {
                                logOut()
                            }}
                            className="ms-4"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar