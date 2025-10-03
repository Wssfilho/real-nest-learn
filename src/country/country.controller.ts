import { Controller, Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {

    constructor(private readonly coutryService: CountryService){}

    @Get()
    async getAll()
    {
        return this.coutryService.getAll();
    }
}
