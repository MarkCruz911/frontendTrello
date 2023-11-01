import { Controller,Req, Get, Post, Body, Patch, Param, Delete,HttpCode,HttpStatus,UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from './auth.guard';

let token:string="hola";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @HttpCode(HttpStatus.OK)
  @Post('login')
    async signInn(@Body() signInDto: Record<string, any>){
    console.log("INGRESOOOOOO");
    const response = await this.authService.signInn(signInDto.gmail, signInDto.password);
    console.log("holaaaaaaaaaa");
    console.log(response); 
    token=response.access_token;
    return await this.authService.signInn(signInDto.gmail, signInDto.password);
  }
  @Get('login')
  token(@Req() request: Request){
    return token;
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
