import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HeroDto } from '../dtos/hero.dto';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
    //so imnporta o servico
    constructor(private readonly heroService: HeroService) { }
    @Post()
    async create(@Body() data: HeroDto) {
        return this.heroService.create(data);
    }
    @Get()
    async findAll() {
        return this.heroService.findAll();
    }
    //forma de usar o parametro passado pela url
    @Put(":id")
    async update(@Param("id") id: number, @Body() data: HeroDto) {
        return this.heroService.update(Number(id), data);
    }
    @Delete(":heroId/power/:powerId")
    async deleteheroPower(
        @Param("heroId") heroId: number, @Param("powerId") powerId: number) {
        return this.heroService.removePower(Number(heroId), Number(powerId));
    }
    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.heroService.delete(Number(id));
    }

    @Get(":id")
    async getById(@Param("id") id: number) {
        return this.heroService.getById(Number(id));
    }

}
