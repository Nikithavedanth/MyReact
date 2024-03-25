import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchComponent } from './switch/switch.component';
import { SwitchProductComponent } from './switch-product/switch-product.component';
import { ForComponent } from './for/for.component';
import { NasaAPIComponent } from './nasa-api/nasa-api.component';
import { ForPropertiesComponent } from './for-properties/for-properties.component';
import { ForTrackBYComponent } from './for-track-by/for-track-by.component';
import { ClassDemoComponent } from './class-demo/class-demo.component';
import { StyleDemoComponent } from './style-demo/style-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ForPropertiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
