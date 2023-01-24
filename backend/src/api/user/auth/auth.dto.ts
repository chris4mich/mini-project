import { IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @MinLength(4)
  public readonly username: string;

  @IsString()
  @MinLength(4)
  public readonly password: string;
}

export class LoginDto {
  @IsString()
  public readonly username: string;

  @IsString()
  public readonly password: string;
}