import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MonitorCronService {
  private readonly logger = new Logger(MonitorCronService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  @Cron('*/1 * * * *') // Executa a cada 1 minuto
  async handleCron() {
    const monitors = await this.prismaService.monitors.findMany();

    for await (const monitor of monitors) {
      try {
        const startTime = performance.now();
        const response: any = await this.httpService
          .get(monitor.url)
          .toPromise();
        const endTime = performance.now();
        const latency = endTime - startTime;
        this.logger.log(
          `Monitor ${monitor.ID}: ${response.status} - ${response.statusText}`,
        );

        await this.prismaService.monitoramentoStatus.create({
          data: {
            statusCode: Number(response.status),
            monitorId: monitor.ID,
            latencyMs: latency,
          },
        });
      } catch (error) {
        // Tratar erro ao fazer a chamada HTTP
        this.logger.error(`Erro ao acessar ${monitor.url}: ${error.message}`);
        await this.prismaService.monitoramentoStatus.create({
          data: {
            statusCode: 500,
            monitorId: monitor.ID,
            latencyMs: 0,
          },
        });
      }
    }
  }
}
