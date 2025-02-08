import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, Licorne } from '@prisma/client';

@Injectable()
export class LicorneService {
  constructor(private prisma: PrismaService) {}

  // Get a licorne by its ID
  async getLicorneById(id: number): Promise<Licorne | null> {
    return this.prisma.licorne.findUnique({
      where: { id },
    });
  }

  // Get all licornes with filters and pagination
  async getAllLicornes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.LicorneWhereUniqueInput;
    where?: Prisma.LicorneWhereInput;
    orderBy?: Prisma.LicorneOrderByWithRelationInput;
  }): Promise<Licorne[]> {
    return this.prisma.licorne.findMany(params);
  }

  //Create a new licorne
  async createLicorne(data: Prisma.LicorneCreateInput): Promise<Licorne> {
    return this.prisma.licorne.create({ data });
  }

  // Update an existing licorne
  async updateLicorne(
    id: number,
    data: Prisma.LicorneUpdateInput,
  ): Promise<Licorne> {
    return this.prisma.licorne.update({
      where: { id },
      data,
    });
  }

  // Delete a licorne
  async deleteLicorne(id: number): Promise<Licorne> {
    return this.prisma.licorne.delete({
      where: { id },
    });
  }
}
