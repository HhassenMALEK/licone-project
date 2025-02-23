import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto } from './dto/create_user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return await this.prisma.user.findMany({});
  }

  async getUserById(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { userId },
    });
    if (!user) {
      throw new NotFoundException(`Utilisateur avec ID ${userId} non trouvé`);
    }
    return user;
  }

  // Méthode pour créer un utilisateur
  async createUser(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password,
      },
    });
  }

  // Méthode pour mettre à jour un utilisateur
  async updateUser(userId: number, createUserDto: CreateUserDto) {
    await this.getUserById(userId); // Vérifification de l'existance de l'User
    return await this.prisma.user.update({
      where: { userId },
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password,
        updatedAt: new Date(),
      },
    });
  }

  async deleteUser(userId: number) {
    await this.getUserById(userId);
    return this.prisma.user.delete({
      where: { userId },
    });
  }
}
