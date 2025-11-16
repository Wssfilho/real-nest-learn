import {
  ConflictException,
  Injectable,
  NotFoundException,
  Response,
} from "@nestjs/common";
import { PrismaService } from "src/databases/prisma.service";
import { CountryDto } from "../dtos/country.dto";

@Injectable()
export class CountryService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAll() {
    const country = await this.prismaService.country.findMany({
      relationLoadStrategy: "join",
      include: {
        hero: true,
      },
    });
    //if (!country) throw new NotFoundException('country not exist')
    return country;
  }
  async create(data: CountryDto) {
    const { name } = data;
    const countryExists = await this.prismaService.country.findFirst({
      where: {
        name: name,
      },
    });
    if (countryExists) throw new ConflictException("country already exist");
    const country = await this.prismaService.country.create({
      data,
    });
    return country;
  }
  async update(id: number, data: CountryDto) {
    const countryExist = await this.prismaService.country.findUnique({
      where: { id },
    });
    if (!countryExist) {
      throw new NotFoundException("Country not exists");
    }
    return await this.prismaService.country.update({
      where: {
        id,
      },
      data,
    });
  }
  async delete(id: number) {
    const countryExists = await this.prismaService.country.findFirst({
      where: {
        id,
      },
    });
    if (!countryExists) {
      throw new NotFoundException("Country not exists");
    }

    await this.prismaService.country.delete({
      where: {
        id,
      },
    });
    return {
      message: "country deleted successful",
      statusCode: 200,
    };
  }
  async getById(id: number) {
    const countryExist = await this.prismaService.country.findFirst({
      where: { id },
    });
    if (!countryExist) {
      throw new NotFoundException("country not exists");
    }
    return countryExist;
  }
}
