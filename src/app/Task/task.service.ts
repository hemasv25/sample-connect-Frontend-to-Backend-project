import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskEntity } from '../TaskEntity/task-entity.Entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:8080/api/tasks";

  constructor(private httpClient :HttpClient) { }

  createTask(newTask : TaskEntity):Observable<TaskEntity>{

    return this.httpClient.post<TaskEntity>(this.apiUrl,newTask);


  }

  getAllTask():Observable<TaskEntity[]>{
    return this.httpClient.get<TaskEntity[]>(this.apiUrl);
  }

  updateTask(taskid:number,updatedTask:TaskEntity):Observable<TaskEntity>{
      return this.httpClient.put<TaskEntity>(this.apiUrl+'/'+taskid,updatedTask)
  }

  deleteTask(taskid:number){
    return this.httpClient.delete(this.apiUrl+'/'+taskid);

  }


}
