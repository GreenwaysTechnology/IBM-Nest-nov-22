//Generics and array

//without generics
let list = [1, 2, "hello", true]

//generics: <Type>
let numberList: Array<number> = [1, 2, 45]
let numList: number[] = [1, 3, 4]

class Product {
    id: number
    name: string
    qty?: number
    inStock?: boolean
}
let products: Array<Product> = [
    { id: 1, name: 'p1', qty: 1, inStock: true }
]