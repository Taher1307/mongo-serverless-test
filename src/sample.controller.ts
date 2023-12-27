// src/sample.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class SampleController {
  constructor(private readonly appService: AppService) {}

  @Get('sample')
  getSample(): string {
    return this.appService.getHello();
  }
}
