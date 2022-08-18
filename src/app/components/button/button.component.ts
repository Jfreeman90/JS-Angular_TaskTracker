import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

//button component
export class ButtonComponent implements OnInit {
  //input that can be used when nested in a html to create a button with properties
  @Input() text: string;
  @Input() color: string;
  //sends the data from the component
  @Output() btnClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //button function that will work onclick and send the click back to the nested component
  onClick(){
    this.btnClick.emit();
  }

}
