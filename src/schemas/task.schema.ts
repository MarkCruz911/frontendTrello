import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose"


@Schema({
    timestamps:true
})
export class Task{
    @Prop({
        unique:true,
        required:true,
        trim:true
    })
    title:string;

    @Prop({
        trim:true
    })
    description:string;

    @Prop({
        default:true
    })
    instandby:boolean;

    @Prop({
        default:false
    })
    todo:boolean;

    @Prop({
        default:false
    })
    inprogress:boolean;

    @Prop({
        default:false
    })
    readylaunch:boolean;
    @Prop({
        default:false
    })
    launched:boolean;


} 

export const TaskSchema = SchemaFactory.createForClass(Task)

