import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLicorneDto } from './dto/create_licorne.dto';

@Injectable()
export class LicorneService {
  constructor(private prisma: PrismaService) {}

  // Get all licornes with filters and pagination
  async getAllLicornes() {
    return await this.prisma.licorne.findMany();
  }

  // Get a licorne by its ID
  async getLicorneById(id: number) {
    return await this.prisma.licorne.findFirst({
      where: { id },
    });
  }

  //Create a new licorne
  async createLicorne(createLicorneDto: CreateLicorneDto) {
    return await this.prisma.licorne.create({
      data: {
        name: createLicorneDto.name,
        color: createLicorneDto.color,
        age: createLicorneDto.age,
        weight: createLicorneDto.weight,
      },
    });
  }

  // Update an existing licorne
  async updateLicorne(id: number, createLicorneDto: CreateLicorneDto) {
    return this.prisma.licorne.update({
      where: { id },
      data: createLicorneDto,
    });
  }

  // Delete a licorne
  async deleteLicorne(id: number) {
    return this.prisma.licorne.delete({
      where: { id },
    });
  }
}
