import { Controller,Get } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    public getAllUsers():string {
        return 'Users'
    }
}
