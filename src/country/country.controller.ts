import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res, } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDto } from '../dtos/country.dto';

@Controller('country')
export class CountryController {

    constructor(private readonly coutryService: CountryService) { }

    @Get()
    async getAll() {
        return await this.coutryService.getAll();

    }
    @Post()
    //@HttpCode(HttpStatus.OK)
    async create(@Body() data: CountryDto) {
        return await this.coutryService.create(data)

    }
    @Put(":id")
    async update(@Param("id") id: number, @Body() data: CountryDto) {
        const country = this.coutryService.update(Number(id), data);
        return country

    }
    @Get(":id")
    async getById(@Param("id") id : number){
        const country = this.coutryService.getById(Number(id));
        return country;
    }
    @Delete(":id")
    async delete(@Param("id") id: number){
        return this.coutryService.delete(Number(id));
    }

}
