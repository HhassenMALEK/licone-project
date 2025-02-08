import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { LicorneService } from './licorne.service';
import { Licorne } from '@prisma/client';

// Main route for the API
@Controller('licornes')
export class LicorneController {
  constructor(private readonly licorneService: LicorneService) {}

  // // Get a licorne by its ID
  @Get(':id')
  async getLicorneById(@Param('id') id: string): Promise<Licorne | null> {
    return this.licorneService.getLicorneById(Number(id));
  }

  // Get all licornes
  @Get()
  async getAllLicornes(): Promise<Licorne[]> {
    return this.licorneService.getAllLicornes({});
  }

  // Create a new licorne
  @Post()
  async createLicorne(@Body() data: Licorne): Promise<Licorne> {
    return this.licorneService.createLicorne(data);
  }

  // Update an existing licorne
  @Put(':id')
  async updateLicorne(
    @Param('id') id: string,
    @Body() data: Licorne,
  ): Promise<Licorne> {
    return this.licorneService.updateLicorne(Number(id), data);
  }

  // Delete a licorne
  @Delete(':id')
  async deleteLicorne(@Param('id') id: string): Promise<Licorne> {
    return this.licorneService.deleteLicorne(Number(id));
  }
}
