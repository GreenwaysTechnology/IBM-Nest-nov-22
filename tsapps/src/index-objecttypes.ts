//object types
/**
 * class can be as type
 * interface can be as type
 * type keyword as type
 */
class Product {
    id: number
    name: string
    qty?: number
    inStock?: boolean
}

let product: Product = {
    id: 1,
    name: 'phone',
    qty: 100,
    inStock: true,
}
console.log(product)

// let p1: Product = {
//     id: 1,
//     name: 'phone',
//     qty: "100",
//     inStock: true,
// }
// console.log(product)


let p1: Product = {
    id: 1,
    name: 'phone'
}
console.log(product)