import { Module } from '@nestjs/common';
import { MonitorCronService } from './monitor-cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ScheduleModule.forRoot(), HttpModule],
  providers: [MonitorCronService, PrismaService],
})
export class MonitorCronModule {}
