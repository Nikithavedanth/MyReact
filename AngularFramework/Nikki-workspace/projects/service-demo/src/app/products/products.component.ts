import { Component } from '@angular/core';
import { FakeStoreService } from '../fake-store.service';
import { ProductInfo } from '../Productinfo';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private serv:FakeStoreService){

  }
  public product:ProductInfo[]=[];
  public categories:string[]=[];
  public jeweleryProducts:any[]=[];
  // ngOnInit(){
  //   this.serv.GetProducts().subscribe(res=>{
  //     this.products=res;
  //   });
  //   console.log(this.products);
  // }
  GetProductData(){
    this.serv.GetProducts().subscribe(response=>{
      this.product=response
    },error=>{
        console.log("error occurred while making an api call"+error)
      
    })
  }
GetCategoriesData(){
  this.serv.GetCategories().subscribe(res=>{
    this.categories=res;
  })
}
GetJeweleryData(){
this.serv.GetJeweleryInfo().subscribe(res=>{
  this.jeweleryProducts=res;
})
}
}
