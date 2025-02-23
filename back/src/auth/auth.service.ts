import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SignupDto } from 'src/auth/dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { SigninDto } from 'src/auth/dto/signin.dto';
import { JwtService } from '@nestjs/jwt';
//import { ResetPasswordDto } from 'src/auth/dto/reset_password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async signup(signupDto: SignupDto) {
    // Vérifier si l'utilisateur est déjà inscrit
    const { username, password, email } = signupDto;
    const existingUser = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new ConflictException("l'utilisateur existe dejà  ");
    }

    // Hacher le mot de passe
    const hash = await bcrypt.hash(password, 10);
    await this.prismaService.user.create({
      data: {
        email,
        username,
        password: hash,
      },
    });

    return { data: 'utilisateur créé avec succés' };
  }

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    // Vérifier si l'utilisateur est déjà inscrit
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('Utilisateur non trouvé !');

    // Comparer le mot de passe
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new UnauthorizedException('Mot de passe incorrect');
    }

    // Générer le token JWT
    const payload = { email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }

  // async resetPassword(resetPasswordDto: ResetPasswordDto) {
  //   const { email } = resetPasswordDto;
  //   const user = await this.prismaService.user.findUnique({ where: { email } });
  //   if (!user) throw new NotFoundException('Utilisateur non trouvé !');
  // }
}
