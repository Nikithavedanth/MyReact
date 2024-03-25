import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  empId:number=101;
  empName:string="Nikitha";
  empsalary:number= 12345;
}
