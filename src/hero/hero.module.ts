import { Module } from "@nestjs/common";
import { HeroService } from "./hero.service";
import { HeroController } from "./hero.controller";
import { PrismaService } from "src/databases/prisma.service";
//precisa do controller e do service e do prisma
@Module({
  controllers: [HeroController],
  providers: [HeroService, PrismaService],
})
export class HeroModule {}
