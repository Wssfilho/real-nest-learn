import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class CountryService {

    constructor(private readonly prismaService : PrismaService){}
    async getAll()
    {
        const country = await this.prismaService.country.findMany({
            relationLoadStrategy: 'join',
            include: {
                hero: true,
            }

        })
        return country;
    }

}
