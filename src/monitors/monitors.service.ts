import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Monitors } from '@prisma/client';

@Injectable()
export class MonitorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(url: string): Promise<Monitors> {
    return this.prisma.monitors.create({
      data: {
        url,
      },
    });
  }

  async findAll(): Promise<Monitors[]> {
    return this.prisma.monitors.findMany();
  }
}
