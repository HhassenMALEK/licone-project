import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // Cette méthode sera exécutée au démarrage du module
  async onModuleInit() {
    await this.$connect();
  }

  // Optionnel : méthode pour fermer la connexion proprement à la fin
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
