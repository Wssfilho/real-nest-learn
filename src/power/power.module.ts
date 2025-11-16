import { Module } from "@nestjs/common";
import { PowerController } from "./power.controller";
import { PowerService } from "./power.service";
import { PrismaService } from "src/databases/prisma.service";

@Module({
  controllers: [PowerController],
  providers: [PowerService, PrismaService],
})
export class PowerModule {}
