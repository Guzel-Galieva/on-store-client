import {$authHost, $host} from "./index";

export const addProductB = async (productId) => {
    // console.log('api', productId)
    const {data} = await $authHost.post('api/basket', productId)
    return data
}

export const fetchBasket = async () => {
    const {data} = await  $authHost.get('api/basket')
    return data
}

export const deleteProduct = async (id) => {
    const {data} = await $host.post('api/basket/delete', id)
    return data
}