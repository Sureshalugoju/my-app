import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
 
  public age:number = 20;

  public name:string = "suresh";

  public isIndian:boolean = true;

  public ages: number[] = [20,30,40,50];

  public names: string[] = ["abc","def"]
 
  public products: any = [
    {name: "pen", price:20},
    {name: "phone", price:20000},
    {name: "shirt", price:1000},
    {name: "book", price:50}
  ]

  public educations: any =[
    {qualification:"MCA", school: "Vagdevi", year:2018},
    {qualification:"DEGREE", school: "Chaitanya degree college", year:2015},
    {qualification:"INTER", school: "Shivani college", year:2012},
    {qualification:"SCHOOL", school: "SVRHS school", year:2010}
  ]

  public vachiles: any =[{vehicle:"Bugatti Beetle",manufacture:"Kia",model:"V90",type:"Crew Cab Pickup",fuel:"Electric",color:"grey",image:"http://loremflickr.com/640/480/transport",id:"1"},
  {vehicle:"Smart Malibu",manufacture:"Aston Martin",model:"Malibu",type:"Convertible",fuel:"Diesel",color:"olive",image:"http://loremflickr.com/640/480/animals",id:"2"},
  {vehicle:"Jaguar Silverado",manufacture:"Hyundai",model:"Spyder",type:"Convertible",fuel:"Gasoline",color:"sky blue",image:"http://loremflickr.com/640/480/business",id:"3"},
  {vehicle:"Honda XTS",manufacture:"Audi",model:"A8",type:"Wagon",fuel:"Gasoline",color:"gold",image:"http://loremflickr.com/640/480/abstract",id:"4"},
  {vehicle:"Kia 2",manufacture:"Cadillac",model:"Alpine",type:"Sedan",fuel:"Gasoline",color:"magenta",image:"http://loremflickr.com/640/480/transport",id:"5"},
  {vehicle:"Lamborghini El Camino",manufacture:"Jeep",model:"Spyder",type:"Hatchback",fuel:"Gasoline",color:"turquoise",image:"http://loremflickr.com/640/480/business",id:"6"},
  {vehicle:"Tesla Durango",manufacture:"BMW",model:"2",type:"Wagon",fuel:"Diesel",color:"salmon",image:"http://loremflickr.com/640/480/cats",id:"7"},
  {vehicle:"Honda CX-9",manufacture:"Polestar",model:"Golf",type:"Crew Cab Pickup",fuel:"Electric",color:"tan",image:"http://loremflickr.com/640/480/people",id:"8"},
  {vehicle:"Honda Focus",manufacture:"Cadillac",model:"Civic",type:"Wagon",fuel:"Diesel",color:"orange",image:"http://loremflickr.com/640/480/nightlife",id:"9"},
  {vehicle:"Chrysler Civic",manufacture:"Porsche",model:"XC90",type:"Coupe",fuel:"Hybrid",color:"tan",image:"http://loremflickr.com/640/480/nature",id:"10"},
  {vehicle:"Honda V90",manufacture:"Ford",model:"Model T",type:"Cargo Van",fuel:"Gasoline",color:"plum",image:"http://loremflickr.com/640/480/business",id:"11"},
  {vehicle:"Hyundai Fiesta",manufacture:"Fiat",model:"Colorado",type:"Passenger Van",fuel:"Diesel",color:"magenta",image:"http://loremflickr.com/640/480/nature",id:"12"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
