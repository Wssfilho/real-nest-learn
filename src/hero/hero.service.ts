import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { HeroDto } from '../dtos/hero.dto';
import { PrismaService } from 'src/databases/prisma.service';
import { error } from 'console';
import { Hero, power } from '@prisma/client';
//decorator injectable
@Injectable()
//o servico precisa ter injectable
export class HeroService {
    constructor(private prisma: PrismaService) { }
    async create(data: HeroDto) {
        const { powerId, ... heroData} = data
        const findHero = await this.prisma.hero.findFirst(
            {
                where: {
                    heroName: heroData.heroName,
                }
            }
        )
        if (findHero) throw new ConflictException('hero already exist')
        const hero = await this.prisma.hero.create({
            data: heroData,
        });
        await this.prisma.heroPower.create(
            {
                data:{
                    heroId: hero.id,
                    powerId: powerId,
                }
            }
        )

        
        
        return hero;
    }
    // ! junto com o poder
    async findAll() : Promise<Hero []> {
        return await this.prisma.hero.findMany(
            {
                include:{
                    powers:{
                        include:{
                            power: true,
                        }
                    }
                }
            }
        );
        
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
            throw new NotFoundException();
        }
        return await this.prisma.hero.delete({
            where:{
                id, 
            }
        })
    }
    // ! adcionado
    removePower(idHero: number, idPower: number){
        return this.prisma.heroPower.delete(
            {
                where: {
                    heroId_powerId:{
                        heroId: idHero,
                        powerId: idPower   
                    }
                }
            }
        )
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
            throw new NotFoundException();
        }
        return hero;
    }
}
