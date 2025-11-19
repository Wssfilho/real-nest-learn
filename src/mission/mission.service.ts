import { ConflictException, Injectable } from "@nestjs/common";
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
}
