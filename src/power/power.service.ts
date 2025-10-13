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
    // !not tested
    async update(id: number, data : powerDto){
        await this.prisma.power.update(
            {
                data,
                where: {id: id}
            }
        )
        return{
            message: "update successful",
            statusCode: 200,
        }
    }
    async getById(id: number){
        const power = this.prisma.power.findFirst({where:{id}})
        return power;
    }


}
