import { Body, Controller, Get, Post } from '@nestjs/common';
import { PowerService } from './power.service';
import { powerDto } from 'src/dtos/power.dto';

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
}
