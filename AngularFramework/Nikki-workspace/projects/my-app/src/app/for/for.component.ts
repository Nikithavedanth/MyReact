import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
public courses=["C#.Net","ASP.Net Core","Angular","ReactJS"];
public productsList=[
  {category:"Electronics",products:["TV","Mobile","Laptop"]},
  {category:"MensFashion", products:["T-Shirts","Shirts","Joggers"]},
  {category:"Footwear",products:["Nike","Adidas","Puma"]}
];
public employees=[
  {'empId':101,"empName":"Nikitha","empSalary":12345},
  {'empId':102,"empName":"Isha","empSalary":54321},
  {'empId':103,"empName":"Megha","empSalary":11111},
  {'empId':104,"empName":"Amrutha","empSalary":22222},
  {'empId':105,"empName":"Akshita","empSalary":33333},

]
}
