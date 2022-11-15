

// export default class TodoService {
//     constructor() { }
//     findAll(){
//         return 'todos'
//     }
// }

class TodoService {
    constructor() { }

    findAll() {
        return new Promise((resolve, reject) => {
            const data = [{ id: 1, title: 'learn node', completed: true }, { id: 2, title: 'learn express', completed: false }]
            setTimeout(resolve, 5000, data)
        })
    }
}
export default TodoService;