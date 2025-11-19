import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Mission } from "@prisma/client";
import { PrismaService } from "src/databases/prisma.service";
import { missionDto } from "src/dtos/mission.dto";

@Injectable()
export class MissionService {
  constructor(private prisma: PrismaService) {}
  async createMission(data: missionDto) {
    const mission = await this.prisma.mission.findFirst({
      where: {
        id: data.id,
      },
    });
    if (mission) throw new ConflictException("exist hero");
    return this.prisma.mission.create({
      data,
    });
  }
  async findAll(): Promise<Mission[]> {
    const mission = this.prisma.mission.findMany();
    if (!mission) throw NotFoundException;
    return mission;
  }
}
