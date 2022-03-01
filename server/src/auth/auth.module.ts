import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService, UserService, JwtService],
})
export class AuthModule {}
