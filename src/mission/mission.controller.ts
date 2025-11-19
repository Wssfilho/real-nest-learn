import { Body, Controller, Get, Post } from "@nestjs/common";
import { MissionService } from "./mission.service";
import { missionDto } from "src/dtos/mission.dto";

@Controller("mission")
export class MissionController {
  constructor(private readonly missionService: MissionService) {}

  //methods
  @Post()
  async create(@Body() data: missionDto) {
    return this.missionService.createMission(data);
  }
  @Get()
  async findAll() {
    return this.missionService.findAll();
  }
}
