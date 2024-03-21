import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export class UpdateUserDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  fullName: string;

  @MinLength(3, { message: 'Username must have atleast 3 characters.' })
  @IsAlphanumeric(undefined, {
    message: 'Username does not allow other than alpha numeric chars.',
  })
  nickName: string;

  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number`,
  })
  password: string;
}
