import Seller from "./pages/SellerPage";
import {SELLER_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Basket from "./pages/BasketPage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";

export const authRoutes = [
    {
        path: SELLER_ROUTE,
        Element: Seller
    },
    {
        path: BASKET_ROUTE,
        Element: Basket
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Element: Shop
    },
    {
        path: LOGIN_ROUTE,
        Element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Element: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Element: ProductPage
    },
]