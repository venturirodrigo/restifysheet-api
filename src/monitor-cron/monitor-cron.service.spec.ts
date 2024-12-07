import { Test, TestingModule } from '@nestjs/testing';
import { MonitorCronService } from './monitor-cron.service';

describe('MonitorCronService', () => {
  let service: MonitorCronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonitorCronService],
    }).compile();

    service = module.get<MonitorCronService>(MonitorCronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
