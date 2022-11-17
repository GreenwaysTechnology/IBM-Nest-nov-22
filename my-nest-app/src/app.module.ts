import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GreeterModule } from "./greeter/greeter.module";
import { UsersModule } from './users/users.module';

@Module({
  imports: [GreeterModule, UsersModule],
  controllers: [AppController]
})
export class AppModule { }