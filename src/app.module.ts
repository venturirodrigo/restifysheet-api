import { Module } from '@nestjs/common';
import { MonitorsModule } from './monitors/monitors.module';
import { MonitorCronModule } from './monitor-cron/monitor-cron.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MonitorsModule, MonitorCronModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
