import { IsString, IsBoolean,IsOptional, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    lastname:string;

    @IsString()
    @IsNotEmpty()
    gmail:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsString()
    @IsOptional()
    image_url?:string;

    @IsString()
    @IsOptional()
    rol?:string[];

}
