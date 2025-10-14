import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { power } from '@prisma/client';
import { PrismaService } from 'src/databases/prisma.service';
import { powerDto } from 'src/dtos/power.dto';

@Injectable()
export class PowerService {

    constructor(private readonly prisma: PrismaService) { }

    async create(data: powerDto) {
        const findPower = await this.prisma.power.findFirst({ where: { name: data.name } });
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
    async update(id: number, data: powerDto) {
        const power = await this.prisma.power.findUnique(
            {
                where:{
                    id,
                },
            }
        )
        if(!power) throw new NotFoundException();
        await this.prisma.power.update(
            {
                data,
                where: { id: id }
            }
        )
        return {
            message: "update successful",
            statusCode: 200,
        }
    }
    async getById(id: number) {
        const power = await this.prisma.power.findUnique({ where: { id } })
        if(!power) throw new NotFoundException();
        return power;
    }
    async delete(id: number) {
        const power = await this.prisma.power.findUnique({
            where: {
                id,
            }
        })
        if (!power) {
            throw new NotFoundException();
        }
        await this.prisma.power.delete({ where: { id } });
        return({
            message: "delete successfull",
            statusCode: 200,
        });
    }
    async powerHero(): Promise<power[]> {
        return await this.prisma.power.findMany(
            {
                include: {
                    heroes: {
                        include: {
                            hero: true,
                        }
                    }
                }

            }
        )
    }


}
