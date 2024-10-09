import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorldResponse } from '@root/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloWorldResponse {
    return this.appService.getHello();
  }
}
