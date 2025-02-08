import { Module } from '@nestjs/common';
import { LicorneModule } from './licorne/licorne.module';

@Module({
  imports: [LicorneModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
