
export class CustomerService {
    constructor() { }
    list() {
        return new Promise((resolve, reject) => {
            const customers = [
                { id: 1, name: 'subramanian' },
                { id: 2, name: 'Murugan' },
                { id: 3, name: 'Ram' }
            ]
            setTimeout(resolve,5000,customers)
        })
    }
}
