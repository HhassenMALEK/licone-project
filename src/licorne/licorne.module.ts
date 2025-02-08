// licorne.module.ts
import { Module } from '@nestjs/common';
import { LicorneService } from './licorne.service';
import { LicorneController } from './licorne.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LicorneService],
  controllers: [LicorneController],
})
export class LicorneModule {}
