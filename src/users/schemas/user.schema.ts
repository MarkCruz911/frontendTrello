import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
    timestamps:true
})
export class User {
    @Prop() 
    name: string;
  
    @Prop()
    lastname: string;
  
    @Prop()
    gmail: string;
  
    @Prop()
    password: string;
  
    @Prop()
    image_url: string;
  
    @Prop([String]) 
    rol: string[];

}
export const UserSchema = SchemaFactory.createForClass(User);