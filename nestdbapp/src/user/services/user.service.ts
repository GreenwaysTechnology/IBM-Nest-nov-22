import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from '../entities/User.model'
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class UserService {
    //inject model , since it is acting as repospository
    constructor(
        @InjectModel(User)
        private readonly userModel: typeof User,
    ) {
        console.log('user service is called')
    }
    //apis 
    async findAll(): Promise<User[]> {
        //curd apis 
        return this.userModel.findAll()
    }

    create(createUserDto: CreateUserDto): Promise<User> {
        return this.userModel.create({
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
        });
    }

    findOne(id: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}