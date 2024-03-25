import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  // flag:boolean=true;
  public product:any={
    Name:"Iphone 14",
    Price:89000,
    Image:'assets/iphone.jpeg',
    Description:"Iphone is a good mobile, which is more secured.."

  }
  btnText="Description";
  toggle:boolean=true;
  ToggleBtn(){
    this.toggle=(this.toggle==true)?false:true;
    this.btnText=(this.btnText=="Description")?'Preview':'Description';
  }
}
