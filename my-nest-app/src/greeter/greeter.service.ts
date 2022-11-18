import { Injectable } from '@nestjs/common';

@Injectable()
export class GreeterService {
    private readonly message: string = 'Greeter Service';
    constructor() { }

    //Biz methods
    public async sayGreet(): Promise<string> {
        return this.message;
    }
}
