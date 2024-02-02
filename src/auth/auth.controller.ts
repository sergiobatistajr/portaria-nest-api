import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Res,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { Request, Response } from 'express';
import { AuthDto } from './dto/auth.dto';
import { jwtConstants } from 'src/constants';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Body() signInDto: AuthDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, accessToken } = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );

    res.cookie(jwtConstants.accessToken, accessToken, {
      httpOnly: true,
      secure: true,
      signed: true,
      sameSite: 'none',
      maxAge: jwtConstants.oneDayInMs,
    });

    return {
      user,
    };
  }

  @Get('me')
  async getMe(@Req() req: Request) {
    const { user } = req as any;
    return { user };
  }

  @Get('logout')
  signOut(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(jwtConstants.refreshToken);
    res.clearCookie(jwtConstants.accessToken);
    return {};
  }
}
