import { Injectable } from '@angular/core';
import { Itasks } from '../interfaces/itasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = "http://localhost:3001/tasks";

  constructor(private http:HttpClient) { }
  
  getTasks() {
    return this.http.get<Itasks[]>(this.url)
  }

  

  deleteTask(task_id:number) {
    return this.http.delete<Itasks>(this.url + "/" + task_id);
  }

  createTask(data:any) {
    return this.http.post<Itasks>(this.url, data);
  }
}
