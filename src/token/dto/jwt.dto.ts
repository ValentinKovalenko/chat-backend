import { IsString } from 'class-validator';

export class JwtDto {
  @IsString()
  email: string;
}
