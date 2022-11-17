import { Module } from "@nestjs/common";
import { GreetingController } from "./greeter.controller";



@Module({
    imports: [],
    controllers: [GreetingController],
    providers:[]
})
export class GreeterModule { }