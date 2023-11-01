import { IsString, IsBoolean,IsOptional, IsNotEmpty } from "class-validator";


export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    title:string;
    @IsString()
    @IsOptional()
    description?:string;
    @IsBoolean()
    @IsOptional()
    instandby?:boolean;
    @IsBoolean()
    @IsOptional()
    todo?:boolean;
    @IsBoolean()
    @IsOptional()
    inprogress?:boolean;
    @IsBoolean()
    @IsOptional()
    readylaunch?:boolean;
    @IsBoolean()
    @IsOptional()
    launched?:boolean;
}








