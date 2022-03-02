import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'db/prisma/service/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      // Token expires in 1h
      signOptions: { expiresIn: 60 * 60 + 's' },
    }),
  ],
  providers: [UserService, UserResolver, PrismaService, AuthService],
})
export class UserModule {}
