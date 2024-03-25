import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
public msg:string='';
public student:any[]=[]
public SendClick(){
  this.msg="Hello From Parent";
  this.student=[{stdId:101,stdName:"Nikitha"},
  {stdId:101,stdName:"Nikitha"},
  {stdId:101,stdName:"Nikitha"},
  {stdId:101,stdName:"Nikitha"},
  {stdId:101,stdName:"Nikitha"}]
}
public msgFromChild:string='';
public GetMessageFromChild(e:any){
  this.msgFromChild=e;
}
}
