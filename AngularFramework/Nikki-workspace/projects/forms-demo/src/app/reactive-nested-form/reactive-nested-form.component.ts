import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-nested-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './reactive-nested-form.component.html',
  styleUrl: './reactive-nested-form.component.css'
})
export class ReactiveNestedFormComponent {
public frmRegister=new FormGroup({
  Name:new FormControl(''),
  Price:new FormControl(0),
  frmVendor:new FormGroup({
    VendorName: new FormControl(''),
    VendorRating:new FormControl(0)
  })
})
get VendorName(){
  return this.frmRegister.get("VendorName");
}
get VendorRating(){
  return this.frmRegister.get('VendorRating');
}
Register(data:any){
  alert(JSON.stringify(data));
}
UpdateClick(){
this.frmRegister.patchValue({
  Price:70000.00,
  frmVendor:{
    VendorRating:4.1
  }
})
}

}
