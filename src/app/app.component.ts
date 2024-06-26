import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], //BrowserAnimationsModule, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'visual-neural-network';
}
