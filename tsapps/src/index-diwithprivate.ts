class TodoService {
    constructor() {

    }
    list(): string {
        return 'all todos'
    }
}
// class TodoController {
//     private todoService: TodoService
//     constructor(todoService: TodoService) {
//         this.todoService = todoService
//     }
//     get() {
//         console.log(this.todoService.list())
//     }
// }
class TodoController {
    // private todoService: TodoService
    constructor(private todoService: TodoService) { }
    get() {
        console.log(this.todoService.list())
    }
}
function main() {
    let todoctrl = new TodoController(new TodoService())
    todoctrl.get()
}
main()