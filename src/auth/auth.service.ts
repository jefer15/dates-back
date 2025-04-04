import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto){
    const user = await this.userService.findOneByEmail(loginDto.email);
    if (!user || user.password !== loginDto.password) {
      throw new UnauthorizedException('Credenciales inválidas');
    }
    const payload = { sub: user.id, role: user.role, email: user.email };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email: user.email
    };
  }
}
