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
    const { access_token, user } = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    res.cookie('auth', access_token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
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
    res.clearCookie('auth');
    return {};
  }
}
