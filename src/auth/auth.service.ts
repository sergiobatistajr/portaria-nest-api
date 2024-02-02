import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{
    user: { username: string; id: string; role: string };
    accessToken: string;
  }> {
    const user = await this.usersService.findOne(username);

    if (user?.password !== pass || !user?.isActive) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: await this.jwtService.signAsync({
        sub: user.id,
        username: user.username,
        role: user.role,
      }),
      user: {
        username: user.username,
        id: user.id,
        role: user.role,
      },
    };
  }
}
