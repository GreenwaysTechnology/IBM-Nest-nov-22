import { Controller, Get } from '@nestjs/common'
import { GreeterService } from './greeter.service'
//takes parameter ; url
@Controller("greet")
export class GreetingController {

    constructor(private greeterService: GreeterService) { }

    @Get()
    public sayGreet(): Promise<string> {
        return this.greeterService.sayGreet()
    }
}