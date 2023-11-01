import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { find } from 'rxjs';
import { Task } from 'src/schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create_task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel:Model<Task>){}

    async findAll(){
        return this.taskModel.find();
    }
    async create(createTask:CreateTaskDto){
        const createdTask = this.taskModel.create(createTask);
        return createdTask;
    }
    async findOne(id:string){
        return this.taskModel.findById(id);
    }
    async delete(id:string){
        return this.taskModel.findByIdAndDelete(id);
    }
    async update(id:string,task:UpdateTaskDto){
        return this.taskModel.findByIdAndUpdate(id,task,{new:true});
    }

}
