import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'  //remeber to add httpclient as a module
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';        //task interface

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    }
  )
}

@Injectable({
  providedIn: 'root'
})

//functions and set up for tasks
export class TaskService {
  //url to get data from the api
  private apiUrl= 'http://localhost:5000/tasks:';

  //constructor allows the use of get/post/patch/del
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    //return the task array from the api
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task[]>{
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task[]>(url)
  }

  updateTaskReminder(task: Task): Observable<Task[]>{
    //change the value of the reminder 
    const url=`${this.apiUrl}/${task.id}`;
    return this.http.put<Task[]>(url, task, httpOptions)
  }

  addTask(task: Task): Observable<Task>{
    //add a new task to the database
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }
}
