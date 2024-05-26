import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Футболка'},
            {id: 2, name: 'Брюки'}
        ]
        this._products = [
            {id: 1, name: 'Футболка1 Джокер', price: 112, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 2, name: 'Футболка2 Джокер', price: 1100002, typeId:2, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 3, name: 'Футболка3 Джокер', price: 11442, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 4, name: 'Футболка1 Джокер', price: 112, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 5, name: 'Футболка2 Джокер', price: 1100002, typeId:2, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 6, name: 'Футболка3 Джокер', price: 11442, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 7, name: 'Футболка1 Джокер', price: 112, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 8, name: 'Футболка2 Джокер', price: 1100002, typeId:2, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'},
            {id: 9, name: 'Футболка3 Джокер', price: 11442, typeId:1, description:'dsfdfsf',
            img:'C:/Users/MAGGIC/Desktop/2 сем/react/onstore/server/static/3f3be70b-d072-407f-b6b6-8bb6ba2acf01.jpg',phone:'112'}

        ]
        this._selectedType = {}
        // this._page = 1
        // this._totalCount = 0
        // this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setProducts(products) {
        this._products = products
    }

    setSelectedType(type) {
        // this.setPage(1)
        this._selectedType = type
    }
    // setPage(page) {
    //     this._page = page
    // }
    // setTotalCount(count) {
    //     this._totalCount = count
    // }

    get types() {
        return this._types
    }
    get products() {
        return this._products
    }
    get selectedType() {
        return this._selectedType
    }
    // get totalCount() {
    //     return this._totalCount
    // }
    // get page() {
    //     return this._page
    // }
    // get limit() {
    //     return this._limit
    // }
}