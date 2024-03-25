import { Component } from '@angular/core';
import { FlipkartElectronicsComponent } from '../flipkart-electronics/flipkart-electronics.component';
import { FlipkartHomeComponent } from '../flipkart-home/flipkart-home.component';
import { FlipkartJewelryComponent } from '../flipkart-jewelry/flipkart-jewelry.component';
import { FlipkartMensComponent } from '../flipkart-mens/flipkart-mens.component';
import { FlipkartWomensComponent } from '../flipkart-womens/flipkart-womens.component';
import { FlipkartAdminComponent } from '../flipkart-admin/flipkart-admin.component';
import { RouterLink, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-flipkart-index',
  standalone: true,
  imports: [HttpClientModule,RouterLink,RouterModule,FlipkartElectronicsComponent,FlipkartHomeComponent,FlipkartJewelryComponent,FlipkartMensComponent,FlipkartWomensComponent,FlipkartAdminComponent],
  templateUrl: './flipkart-index.component.html',
  styleUrl: './flipkart-index.component.css'
})
export class FlipkartIndexComponent {

}
