import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registation',
  templateUrl: './event-registation.component.html',
  styleUrls: ['./event-registation.component.css']
})
export class EventRegistationComponent implements OnInit {
  public name: string="";
  public names: string[]=["suresh","praveen"];
  constructor() { }

  ngOnInit(): void {
  }
  register(){
    if(this.name !=""){
    this.names.push(this.name);
  }
    this.name="";
  }
  delete(){
    this.names.pop();
  }

}
