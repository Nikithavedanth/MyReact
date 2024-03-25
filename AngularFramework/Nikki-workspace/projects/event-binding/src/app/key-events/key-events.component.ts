import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './key-events.component.html',
  styleUrl: './key-events.component.css'
})
export class KeyEventsComponent {
public users:any[]=[
  {UserName:'Niks'},
  {UseName:'Nikitha'},
  {UserName:"Nikki"},
  {UserName:'Nikku'},
  {UserName:'Nikkkk'}
]
public isPwdWarnVisible:boolean= false;
public UserError:string='';
public isInvalid:boolean=false;
VerifyUser(e:any){
// alert(e.target.value);
let user=e.target.value;
for(var u of this.users){
  if(u.UserName==user){
    this.UserError="UserName already taken.try another";
    this.isInvalid=true;
    break;
  }else{
   this.UserError='UserName Available';
   this.isInvalid=false;
  }
}
}
VerifyPassword(e:any){
  if(e.keyCode>=65 && e.keyCode<=90){
    this.isPwdWarnVisible=true;
  }
  else{
    this.isPwdWarnVisible=false;
  }
}
}
