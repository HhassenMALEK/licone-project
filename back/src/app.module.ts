import { Module } from '@nestjs/common';
import { LicorneModule } from './licorne/licorne.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [LicorneModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
