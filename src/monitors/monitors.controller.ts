import { Body, Controller, Get, Post } from '@nestjs/common';
import { MonitorsService } from './monitors.service';
import { Monitors } from '@prisma/client';

@Controller('monitors')
export class MonitorsController {
  constructor(private readonly monitorsService: MonitorsService) {}

  @Post()
  async create(@Body() payload: any): Promise<Monitors> {
    return this.monitorsService.create(payload.url);
  }

  @Get()
  async findAll(): Promise<Monitors[]> {
    return this.monitorsService.findAll();
  }
}
