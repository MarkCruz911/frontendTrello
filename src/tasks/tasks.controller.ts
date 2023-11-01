import { Controller,Get,Post,Delete,Put,Body,Param,ConflictException,NotFoundException,HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create_task.dto';
import { UpdateTaskDto } from 'src/dto/update-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService:TasksService){}
    @Get()
    findAll(){
        return this.tasksService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id:string){
        const task = await this.tasksService.findOne(id);
        if(!task) throw new NotFoundException('Task not found');
        return task;
    }
    @Post()
    async create(@Body() body:CreateTaskDto) {
         try{
            return await this.tasksService.create(body);
        }catch(e){
            if(e.code === 11000){
                throw new ConflictException('El titulo ya existe');
            } 
            throw e;
        }
    }
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id:string){
        const task = await this.tasksService.delete(id);
        if(!task) throw new NotFoundException('Task not found');
        return task;
    }
    @Put(':id')
    async update(@Param('id') id:string, @Body() body:UpdateTaskDto){
        const task = await this.tasksService.update(id,body);
        if(!task) throw new NotFoundException("Task not found")
        return task;
    }
}
