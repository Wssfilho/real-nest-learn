import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
        const findCoutry = await this.prisma.country.findFirst(
            {
                where:{
                    id: heroData.countryId
                }
            }
        )
        if(!findCoutry) throw new NotFoundException('country not found')
        if (findHero) throw new ConflictException('hero already exist')
        const hero = await this.prisma.hero.create({
            data: heroData,
        });
        const heroPower = await this.prisma.heroPower.create(
            {
                data:{
                    heroId: hero.id,
                    powerId: powerId,
                }
            }
        );
        if(!heroPower) {
            // Se falhar, deletar o herói criado para manter consistência
            await this.prisma.hero.delete({
                where: { id: hero.id }
            })
            throw new InternalServerErrorException('Failed to assign power to hero')
        }


        return{
            message: "hero created",
            statusCode: 200,
        }
        
        
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
