import { Module } from "@nestjs/common";
import { GreetingController } from "./greeter.controller";
import { GreeterService } from "./greeter.service";



@Module({
    imports: [],
    controllers: [GreetingController],
    providers:[GreeterService]
})
export class GreeterModule { }