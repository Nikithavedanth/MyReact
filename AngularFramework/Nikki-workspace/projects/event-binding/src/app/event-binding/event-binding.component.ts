import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
public styleObject:{position:string,left:string,top:string}={
  position:'',left:'',top:''
}
public imageUrl:string='assets/shoe1.jpg';
SetColor(colorName:string){
// alert(colorName);
switch(colorName){
   case 'brown':
    this.imageUrl='assets/shoe1.jpg';
    break;
   case 'black':
    this.imageUrl='assets/shoe2.jpg';
    break;
   case 'white':
    this.imageUrl='assets/shoe3.jpg';
    break;

}
}

MouseMove(e:any){
this.styleObject={
  position:'fixed',
  left:e.clientX+'px',
  top:e.clientY+'px'
}
}
}
