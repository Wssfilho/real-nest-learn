import { Module } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { MissionsController } from './missions.controller';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  providers: [MissionsService, PrismaService],
  controllers: [MissionsController]
})
export class MissionsModule {}
