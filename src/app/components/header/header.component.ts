import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

//any variables inside this component can be used in the header.component.html to construct the header
export class HeaderComponent implements OnInit {
  //title of the header
  title: string = 'Task tracker';
  //is add task form shown or not
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService, private router:Router) { 
    //set up a subscription that watches for on toggle being clicked and updates showAddTask value of this class
    this.subscription=this.uiService.onToggle().subscribe((value) => (this.showAddTask=value))
  }

  ngOnInit(): void {
  }

  //use the UI service to show/hide the task submit 
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  //use the router 
  hasRoute(route: string){
    return this.router.url === route;
  }
}
