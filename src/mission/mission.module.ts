import { Module } from "@nestjs/common";
import { MissionService } from "./mission.service";
import { MissionController } from "./mission.controller";
import { PrismaService } from "src/databases/prisma.service";

@Module({
  providers: [MissionService, PrismaService],
  controllers: [MissionController],
})
export class MissionModule {}
