import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveNestedFormComponent } from './reactive-nested-form/reactive-nested-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReactiveValidationsComponent } from './reactive-validations/reactive-validations.component';
import { HomeComponent } from '../../../routing-demo/src/app/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormsDemo';
}
