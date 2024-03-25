import { Component } from '@angular/core';
import { FakeProductContract } from '../../contracts/fakeproduct.contract';

@Component({
  selector: 'app-flipkart-jewelry',
  standalone: true,
  imports: [],
  templateUrl: './flipkart-jewelry.component.html',
  styleUrl: './flipkart-jewelry.component.css'
})
export class FlipkartJewelryComponent {
public products:FakeProductContract[]=[];
constructor(private serv)
}
