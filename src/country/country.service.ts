import { Injectable, Response } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CountryDto } from './dto/country.dto';

@Injectable()
export class CountryService {

    constructor(private readonly prismaService: PrismaService) { }
    async getAll() {
        const country = await this.prismaService.country.findMany({
            relationLoadStrategy: 'join',
            include: {
                hero: true,
            }

        })
        return country;
    }
    async create(data: CountryDto) {
        const country = this.prismaService.country.create(
            {
                data,
            }
        );
        return country;
    }

}
