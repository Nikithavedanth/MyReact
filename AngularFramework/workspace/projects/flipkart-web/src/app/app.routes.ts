import { Routes } from '@angular/router';
import { FlipkartHomeComponent } from './components/flipkart-home/flipkart-home.component';
import { FlipkartJewelryComponent } from './components/flipkart-jewelry/flipkart-jewelry.component';
import { FlipkartElectronicsComponent } from './components/flipkart-electronics/flipkart-electronics.component';
import { FlipkartMensComponent } from './components/flipkart-mens/flipkart-mens.component';
import { FlipkartWomensComponent } from './components/flipkart-womens/flipkart-womens.component';
import { FlipkartDetailsComponent } from './components/flipkart-details/flipkart-details.component';

export const routes: Routes = [
    {path:'home',component:FlipkartHomeComponent},
    {path:'jewelry',component:FlipkartJewelryComponent},
    {path:'electronics',component:FlipkartElectronicsComponent},
    {path:'mens',component:FlipkartMensComponent},
    {path:'womens',component:FlipkartWomensComponent},
    {path:'details/:id',component:FlipkartDetailsComponent}
];
