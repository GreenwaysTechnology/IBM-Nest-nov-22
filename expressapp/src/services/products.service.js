
export class ProductService {
    constructor() { }
    list() {
        return new Promise((resolve, reject) => {
            const products = [
                { id: 1, name: 'phone', qty: 10, price: 1000 },
                { id: 2, name: 'books', qty: 45, price: 100 },
                { id: 3, name: 'computers', qty: 12, price: 10000 }
            ]
            setTimeout(resolve, 5000, products)
        })
    }
}
