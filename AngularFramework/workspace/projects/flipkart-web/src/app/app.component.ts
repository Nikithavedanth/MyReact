import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FlipkartIndexComponent } from './components/flipkart-index/flipkart-index.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HttpClientModule,FlipkartIndexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FlipkartWeb';
}
