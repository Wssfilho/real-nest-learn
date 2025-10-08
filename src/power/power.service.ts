import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class PowerService {

    constructor(private readonly prisma: PrismaService){}


    async getAll(){
        return this.prisma.power.findMany();
    }


}
