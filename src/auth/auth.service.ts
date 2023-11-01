import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService:UsersService,
    private jwtService:JwtService
    ){}

    async signIn(username:string,pass: string):Promise<{access_token:string}>{
    const user = await this.usersService.findOne(username);
    console.log(user);
    if (user?.password!==pass){
      console.log("No ingresoooo")
      throw new UnauthorizedException();
    }

    const payload={ sub: user.userId, username: user.username}
    const token = await this.jwtService.signAsync(payload);
    console.log("toquen debajo");
    console.log(token);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signInn(gmail:string,pass: string):Promise<{access_token:string}>{
    const user = await this.usersService.findOneDos(gmail);
    console.log("usuario abajo");
    console.log(user);
    console.log(user.password);
    console.log(pass);
    if (user?.password!==pass){
      console.log("No ingresoooo")
      throw new UnauthorizedException();
    }

    const payload={ sub: user.userId, username: user.username}
    const token = await this.jwtService.signAsync(payload);
    console.log("toquen debajo Dos");
    console.log(token);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };

  }






  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
