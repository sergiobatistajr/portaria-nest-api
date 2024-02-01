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
    access_token: string;
    user: { username: string; id: string; role: string };
  }> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass || !user?.isActive) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        username: user.username,
        id: user.id,
        role: user.role,
      },
    };
  }
}
