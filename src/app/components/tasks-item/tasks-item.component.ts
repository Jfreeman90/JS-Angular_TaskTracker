import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

//component that will be each of the tasks
export class TasksItemComponent implements OnInit {
  //input required on construction of the html component of a task item
  @Input() task: Task;
  //feed through a font icon 
  faTimes =faTimes;

  //send the ondelete click back to the main task component
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter;

  //send the ontoggle click back to main task component
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  //delete click emits task
  onDelete(task){
    this.onDeleteTask.emit(task);
  }

  //toggle click emits task
  onToggle(task){
    this.onToggleReminder.emit(task);
  }

}
