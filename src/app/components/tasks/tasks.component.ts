import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';        //task interface
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {
  //set up a task array variable that is empty
  tasks: Task[]=[];

  constructor(private taskService: TaskService) { }

  //stuff to do as soon as task component is loaded up
  ngOnInit(): void {
    //set the tasks to the tasks in the service by using the get task function created
    //subscribe works like then - wait for the data to return - 
    this.taskService.getTasks().subscribe((tasks) => this.tasks=tasks);
  }

  deleteTask(task: Task){
    //delete the task and filter out the task from the ui
    this.taskService.deleteTask(task).subscribe(() => this.tasks=this.tasks.filter((t) => t.id !== task.id));
  }

  toggleReminder(task: Task){
    //toggle reminder on and off by switch true to false and false to true
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    console.log(task)
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

}
