import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Request } from 'express';
import passport from 'passport';

export type Userr = {
  userId:any,
  username:string,
  password:string

};


@Injectable()
export class UsersService {
  constructor( 
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>, 
  ) {}

    private readonly users=[
      {userId:1,
      username:'john',
      password:'changeme',
      }
    ];


  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(request: Request):Promise<User[]> {
    return this.userModel.find(request.query) 
    .setOptions({ sanitizeFilter: true }) 
    .exec();
  }

  async findOne(username: string):Promise<Userr|undefined> {
    //async findOne(id: string):Promise<User>
    const prueba=this.users.find(user=>user.username===username);
    console.log(prueba);
    console.log("prueba");
    return this.users.find(user=>user.username===username);
    //return this.userModel.findOne({ _id: id }).exec();
  }
  async findOneDos(gmail: string):Promise<Userr|undefined>{
    console.log("aquiiii");
    const prueba = await this.userModel.findOne({ gmail }).exec();
    console.log(prueba); 
    const user=
      {userId:prueba._id,
      username:prueba.name,
      password:prueba.password,
    }; 
    console.log(user);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id,updateUserDto,{new: true,}); 
  }

  async remove(id: string) {
    return this.userModel.findByIdAndRemove({ _id: id }).exec();
  }
}
