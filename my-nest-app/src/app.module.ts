import { Module } from "@nestjs/common";
import { AsyncController } from "./app.asynccontroller";
import { AppController } from "./app.controller";
import { GreeterModule } from "./greeter/greeter.module";
import { UsersModule } from './users/users.module';

@Module({
  imports: [GreeterModule, UsersModule],
  controllers: [AppController,AsyncController]
})
export class AppModule { }