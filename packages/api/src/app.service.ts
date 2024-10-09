import { Injectable } from '@nestjs/common';
import { HelloWorldResponse } from '@root/core';

@Injectable()
export class AppService {
  getHello(): HelloWorldResponse {
    return {response: 'Hello World!'};
  }
}
