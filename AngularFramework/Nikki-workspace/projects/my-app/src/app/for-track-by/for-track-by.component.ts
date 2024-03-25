import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-track-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-track-by.component.html',
  styleUrl: './for-track-by.component.css'
})
export class ForTrackBYComponent {
public emps:any[]=[
  {empId:101,empName:"Nikitha",salary:12000},
  {empId:102,empName:"Isha",salary:24000},
  {empId:103,empName:"Megha",salary:36000}
]
GetUpdatedData(){
  this.emps=[
    {empId:101,empName:"Nikitha",salary:14000},
    {empId:102,empName:"Amrutha",salary:24000},
    {empId:103,empName:"Srilu",salary:35000},
    {empId:104,empName:"Raji",salary:50000},
  ]
}
public TrackChanges(index:number){
  return index;
}
}
