import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PowerService } from './power.service';
import { powerDto } from 'src/dtos/power.dto';
import { power } from '@prisma/client';

@Controller('power')
export class PowerController {

    constructor(private readonly powerService : PowerService){}


    @Post()
    async create(@Body() data: powerDto){
        return this.powerService.create(data);
    }
    @Get()
    async getAll()
    {
        return this.powerService.getAll();
    }
    @Put(":id")
    async update(@Param("id") id: number, @Body() data : powerDto){
        return this.powerService.update(Number(id), data );

    }
    @Get(":id")
    async getById(@Param("id") id: number){
        return this.powerService.getById(Number(id));
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.powerService.delete(Number(id));
    }
    @Get()
    async powerHero(): Promise<power []>{
        return this.powerService.powerHero();
    }


}
