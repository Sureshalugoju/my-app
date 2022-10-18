import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {

 public name: string = "";
 public age: number = 0;
 public company: string = "";
 public package: number = 0;

 public employees:any = [
  {name:'abc',age:20, company:'tcs', package:8},
  {name:'def',age:15, company:'htc', package:20}
 ]

  constructor() { }

  ngOnInit(): void {
  }

  register(){
    debugger;
    let employee = {
      name: this.name,
      age: this.age,
      company: this.company,
      package: this.package
    }
     this.employees.push(employee);

      this.name="";
      this.age = 0;
      this.company ="";
      this.package = 0;
      
      alert("Registed successfully!!!");
  }
  delete(i:number){
    debugger;
    this.employees.splice(i,1);
  }

}