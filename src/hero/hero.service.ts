import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { HeroDto } from '../dtos/hero.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { error } from 'console';
import { Hero } from '@prisma/client';
//decorator injectable
@Injectable()
//o servico precisa ter injectable
export class HeroService {
    constructor(private prisma: PrismaService) { }
    async create(data: HeroDto) {
        const { heroName } = data
        const findHero = await this.prisma.hero.findFirst(
            {
                where: {
                    heroName: heroName,
                }
            }
        )
        if (findHero) throw new ConflictException('hero already exist')
        const hero = await this.prisma.hero.create({
            data
        });
        return hero;
    }
    // ! need change for the insert error case
    async findAll() : Promise<Hero []> {
        return await this.prisma.hero.findMany();
    }
    async update(id: number, data: HeroDto) {
        const heroExist = await this.prisma.hero.findUnique(
            {
                where: {
                    id,
                }
            }
        );

        if (!heroExist) {
            return new NotFoundException('Heroi dont exist');
        }
        return await this.prisma.hero.update({
            data,
            where:
            {
                id,
            }
        })
    }

    async delete(id: number){
        const heroExist = await this.prisma.hero.findUnique({
            where:{
                id,
            }
        })
        if(!heroExist)
        {
            throw new NotFoundException("hero not found");
        }
        return await this.prisma.hero.delete({
            where:{
                id, 
            }
        })
    }
    //promessa
    async getById(id: number) : Promise<Hero>
    {
        const hero = await this.prisma.hero.findUnique({
            where:{
                id,
            },
        })
        if(!hero)
        {
            throw new NotFoundException("hero not found");
        }
        return hero;
    }
}
