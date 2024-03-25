import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { NetflixIndexComponent } from './components/netflix/netflix-index/netflix-index.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StudentResultComponent } from './student-result/student-result.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
