import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    // console.log(data)
    return data
}

export const fetchProducts = async (typeId, page, limit= 4) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const fetchUsersProducts = async () => {
    const {data} = await $authHost.get('api/product/my')
    return data
}

export const deleteProductSell = async (id) => {
    const {data} = await $host.post('api/product/delete', id)
    return data
}
