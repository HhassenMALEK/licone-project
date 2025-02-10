import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UsePipes,
} from '@nestjs/common';
import { LicorneService } from './licorne.service';
import { CreateLicorneDto } from './dto/create_licorne.dto';
import { ValidationPipe, ParseIntPipe } from '@nestjs/common';

@Controller('licornes')
export class LicorneController {
  constructor(private readonly licorneService: LicorneService) {}

  @Get()
  async getAllLicornes() {
    return this.licorneService.getAllLicornes();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getLicorneById(@Param('id', ParseIntPipe) id: number) {
    return await this.licorneService.getLicorneById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createLicorneDto: CreateLicorneDto) {
    return await this.licorneService.createLicorne(createLicorneDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateLicorne(
    @Param('id', ParseIntPipe) id: number,
    @Body() createLicorneDto: CreateLicorneDto,
  ) {
    return await this.licorneService.updateLicorne(id, createLicorneDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async deleteLicorne(@Param('id', ParseIntPipe) id: number) {
    return await this.licorneService.deleteLicorne(id);
  }
}
