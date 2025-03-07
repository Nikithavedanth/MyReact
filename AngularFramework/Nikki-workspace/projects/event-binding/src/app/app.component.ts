import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { KeyEventsComponent } from './key-events/key-events.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { LoginPageComponent } from './login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventBinding';
}
