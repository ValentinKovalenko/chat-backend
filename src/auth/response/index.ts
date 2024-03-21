import { IsInt, IsString } from 'class-validator';

export class AuthUserResponse {
  @IsString()
  fullName: string;
  @IsString()
  nickName: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
  @IsInt()
  age: number;
  @IsString()
  gender: string;
  @IsString()
  token: string;
}
