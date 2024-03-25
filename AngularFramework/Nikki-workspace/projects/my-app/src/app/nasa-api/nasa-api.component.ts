import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nasa-api.component.html',
  styleUrl: './nasa-api.component.css'
})
export class NasaAPIComponent {
marsObject:any={};
GetMarsPhotos(){
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(response=>
    response.json()).then(data=>{
      this.marsObject=data
  })
}
}
