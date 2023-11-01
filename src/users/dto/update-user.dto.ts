import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsBoolean,IsOptional, IsNotEmpty } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    name:string;

    @IsString()
    @IsOptional()
    lastname:string;

    @IsString()
    @IsOptional()
    gmail:string;

    @IsString()
    @IsOptional()
    password:string;

    @IsString()
    @IsOptional()
    image_url?:string;

    @IsString()
    @IsOptional()
    rol?:string[];

}
