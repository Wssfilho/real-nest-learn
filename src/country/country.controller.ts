import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDto } from './dto/country.dto';

@Controller('country')
export class CountryController {

    constructor(private readonly coutryService: CountryService) { }

    @Get()
    async getAll() {
        const country = await this.coutryService.getAll();
        if (!country) {
            throw new HttpException('country not created', HttpStatus.BAD_REQUEST);

        }
        return {
            sucess: true,
            message: 'found',
            data: country,
        }
    }
    @Post()
    async create(@Body() data: CountryDto, @Res() res: Response) {
        const country = this.coutryService.create(data)
        if (!country) {
            throw new HttpException('country not created', HttpStatus.NOT_FOUND);
        }
        return {
            success: true,
            message: 'created',
            data: country,
        };
    }
}
