import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  //create the three variables that are the same names as the form names
  //when creating a form add FormsModule to the app.modules 
  text: string;
  day:string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  //create the emitter object that is called onAddTask
  @Output() onAddTask: EventEmitter<Task>=new EventEmitter()

  constructor(private uiService:UiService) { 
      //set up a subscription that watches for on toggle being clicked and updates showAddTask value of this class
      this.subscription=this.uiService.onToggle().subscribe((value) => (this.showAddTask=value))
  }

  ngOnInit(): void {
  }

  //what happens when the form is submitted
  onSubmit(){
    //validation text and day arent empty
    if (!this.text){
      alert('Please add a task!');
      return
    }
    if (!this.day){
      alert('Please add a date!')
      return
    }

    //create the new task object
    const newTask={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //emit the task 
    this.onAddTask.emit(newTask)

    //clear the form after submission
    this.text='';
    this.day='';
    this.reminder=false;


  }
}
