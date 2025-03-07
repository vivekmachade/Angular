import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 imagePath = 'assets/Logo.png';
 openBridgeLabz() {
  window.open('https://www.bridgelabz.com', '_blank');
}
}