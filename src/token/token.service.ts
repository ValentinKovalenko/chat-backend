import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtDto } from './dto/jwt.dto';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}
  async generateJwtToken(user: JwtDto) {
    return this.jwtService.sign(user);
  }
}
