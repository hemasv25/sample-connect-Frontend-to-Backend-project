import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { TaskEntity } from '../TaskEntity/task-entity.Entity';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone : true,
  imports: [CommonModule, FormsModule],

  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService){}

  // first empty the values.
  newTask:TaskEntity = {description :"",completed:false};
  tasks:TaskEntity[]= [];
  editingTask:TaskEntity|null = null;
  updatedTask: TaskEntity = {description :"",completed:false};

  ngOnInit(): void {
    this.getAllTask();
  }

 

  createTask(taskForm: NgForm):void{
    
    // callback function values.
    this.taskService.createTask(this.newTask).subscribe((createdTask)=>{
      //Asign reset task values.
      this.newTask = {description :"",completed:false};
      this.tasks.push(createdTask);
    })
   
  }


  getAllTask(){
    this.taskService.getAllTask().subscribe((tasks) =>{
             this.tasks = tasks
    })
  }


  editTask(task :TaskEntity){
    
    this.editingTask = task;
    this.updatedTask = {...task}; // Create a Copy for editing
    }

    updateTasks():void{
      if(this.editingTask){
        this.taskService.updateTask(this.editingTask.id!,this.updatedTask)
        .subscribe((result) =>{
            const index =this.tasks.findIndex((task) => task.id == this.editingTask!.id)
            if(index!==-1){
              console.log("result" + result);
              this.tasks[index] = result;

              // closed edit
              this.canceledit();
              this.getAllTask();
            }
          })
      }
    }

    canceledit(){
      this.editingTask = null;
      this.updatedTask= {description :"",completed:false};
    }

    deleteTask(taskid:any){
      if(confirm("Are you delete?"))
        this.taskService.deleteTask(taskid)
        .subscribe(() =>{
          this.tasks =this.tasks.filter((tasks)=>tasks.id !== taskid);
          if(this.editingTask && this.editingTask.id == taskid){
            this.canceledit();
          }

      })
    }

}
