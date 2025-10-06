import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class MissionsService {

    constructor(private readonly prismaService : PrismaService){}
}
