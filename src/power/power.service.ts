import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { powerDto } from 'src/dtos/power.dto';

@Injectable()
export class PowerService {

    constructor(private readonly prisma: PrismaService) { }

    async create(data: powerDto) {
        const findPower = await this.prisma.power.findFirst({ where: { id: data.id } });
        if (findPower) { throw new ConflictException() }
        await this.prisma.power.create({ data })
        return {
            message: "Power created",
            statusCode: 200,
        }
    }
    async getAll() {
        return this.prisma.power.findMany();
    }


}
