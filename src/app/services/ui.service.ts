import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  //will the add task button be shown as a boolean
  private showAddTask: boolean=true;
  private subject = new Subject<any>();

  constructor() { }

  //change the variables when toggle task is clicked
  toggleAddTask(): void{
    this.showAddTask= !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  //what happens when toggle pressed
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
