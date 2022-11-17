import { Controller,Get } from '@nestjs/common'


//takes parameter ; url
@Controller("greet")
export class GreetingController {

    @Get()
    public sayGreet():string {
        return 'Greet Me'
    }
}