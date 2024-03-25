import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
public name:string="Nikitha Vedant Madabhushi";
public price:number=34500.98765;
public mfg:Date =new Date("2023-04-28");
public rate:number=0.245;

public product:{name:string,price:number}=
{
name:"OnePlus",
price:23000
}
public msg:string="Welcome Nikitha";
public courses:string[]=["C#.Net","VB.Net","J#.Net","Java",'Angular']
public products:{Name:string,ShippedTo:string}[]=[{Name:"Samsung",ShippedTo:'Delhi'},{Name:"Mobile",ShippedTo:'Hyderabad'},{Name:"Smart Watch",ShippedTo:'Goa'},{Name:"Teashirt",ShippedTo:'Mumbai'}];
public status:any={
  'Delhi':'Delivery in 2 days',
  "Hyderabad":'Same day delivery',
  'Mumbai':'One day delivery',
  'other':'Dispatched in 3-4 working days'
}
}