import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
public registrationForm = new FormGroup({
  UserName:new FormControl("Nikitha"),
  Age:new FormControl(0),
  Mobile:new FormControl('')
})
Register(data:any){
  console.log(JSON.stringify(data));
}
}
