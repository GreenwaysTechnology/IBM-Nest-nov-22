import { Controller, Get, Inject } from '@nestjs/common';
import { MATH_SERVICE } from './math.constants';
import { ClientProxy, MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable, of } from 'rxjs'
@Controller('math')
export class MathController {
  constructor(@Inject(MATH_SERVICE) private readonly client: ClientProxy) { }

  //http controller
  @Get()
  execute() {
    const pattern = { cmd: 'sum' };
    //data
    const numbers = [1, 2, 3, 4, 5];
    //invoke api
    return this.client.send<number>(pattern, numbers);
  }

  @Get('trigger')
  trigger() {
    //data
    const numbers = [1, 2, 3, 4, 5];
    //invoke api
   // const res = this.client.emit('sum_trigger', numbers);
    //console.log(res)
    //res.subscribe(x => console.log('subscriber',x));
    return this.client.emit('sum_trigger', numbers)
  }
  //method to be called by message pattern

  @MessagePattern({ cmd: 'sum' })
  public sum(data: number[]) {
    return (data || []).reduce((a, b) => a + b);
  }

  @EventPattern('sum_trigger')
  public onSum(data: number[]) {
    //biz logic 
    console.log('trigger', data)
    return (data || []).reduce((a, b) => a + b)
  }
}
