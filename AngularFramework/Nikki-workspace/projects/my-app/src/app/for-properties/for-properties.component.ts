import { Component } from '@angular/core';
import {Products} from '../fakestorecontract';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-for-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-properties.component.html',
  styleUrl: './for-properties.component.css'
})
export class ForPropertiesComponent {
public products:Products[]=[];
constructor(){

}
//it will execute when the component is called (Lifecycle Hook)
ngOnInit(){
  fetch('https://fakestoreapi.com/products').then(response=>
    response.json()).then(data=>{
      this.products=data;
    })
}
}
