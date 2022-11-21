import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import { UserController } from './user.controller';
import { UserService } from './services/user.service';

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }
