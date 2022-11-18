import { Controller, Get } from '@nestjs/common';

@Controller('asyncapi')
export class AsyncController {
  // @Get()
  // getAsyncResponse(): Promise<string> {
  //     //return Promise.resolve('Hello')
  //     return new Promise((resolve, reject) => {
  //         setTimeout(resolve, 5000, 'Hello Promise')
  //     })
  // }

  @Get()
  async getAsyncResponse(): Promise<string> {
    return 'Hello async fun'; // Promise.resolve('Hello)
  }
  // @Get()
  // getAsyncResponse(): Promise<any[]> {
  //     //return Promise.resolve('Hello')
  //     return new Promise((resolve, reject) => {
  //         setTimeout(resolve, 5000, [{ message: 'Hello Promise' }, { message: 'Hai Promise' }])
  //     })
  // }
  @Get('sync')
  getSyncResponse(): string {
    return 'Sync';
  }
}
