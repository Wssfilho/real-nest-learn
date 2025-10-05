import { ConflictException, Injectable, NotFoundException, Response } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CountryDto } from '../dtos/country.dto';

@Injectable()
export class CountryService {

    constructor(private readonly prismaService: PrismaService) { }
    async getAll() {
        const country = await this.prismaService.country.findMany({
            relationLoadStrategy: 'join',
            include: {
                hero: true,
            }

        });
        if (!country) throw new NotFoundException('country not exist')
        return country;
    }
    async create(data: CountryDto) {
        const { name } = data
        const existingCountry = await this.prismaService.country.findFirst(
            {
                where: {
                    name: name,
                }
            }
        )
        if (existingCountry) throw new ConflictException('country already exist')
        const country = await this.prismaService.country.create(
            {
                data,
            }
        );
        return country;
    }
    async update(id: number, data: CountryDto) {
        const countryExist = await this.prismaService.country.findUnique({
            where: { id },
        });
        if (!countryExist) {
            throw new NotFoundException('Country not exists');
        }
        return await this.prismaService.country.update(
            {
                where: {
                    id,
                },
                data,

            }
        );
    }

}
