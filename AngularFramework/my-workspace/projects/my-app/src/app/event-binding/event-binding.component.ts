import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
empId:number=101;
empName:string="Nikitha";
empSalary:number=12345;
ChangeData(){
  this.empId=102;
  this.empName="Isha"
  this.empSalary=23456
}
}
