import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/graphql_types';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validate(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);

    if (!user) {
      return null;
    }

    if (await this.userService.validateHash(password, user.password)) {
      return user;
    }
  }

  login(user: User): { access_token: string } {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async verify(token: string) {
    const secret = process.env.JWT_SECRET;
    const decoded = this.jwtService.verify(token, {
      secret,
    });

    if (!decoded.email) {
      throw new Error('Unable to verify the user provided.');
    }

    const user = await this.userService.getUserByEmail(decoded.email);

    if (!user) {
      throw new Error('Unable to find the user provided.');
    }

    return user;
  }
}
