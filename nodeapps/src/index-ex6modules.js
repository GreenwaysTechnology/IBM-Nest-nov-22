import { firstName, lastName, skills, status } from "./util.js";
import TodoService from "./services/todo.service.js";

function main() {
    console.log(firstName, lastName, status, skills)
    let todoservice = new TodoService()
    console.log(todoservice.findAll())
}
main()