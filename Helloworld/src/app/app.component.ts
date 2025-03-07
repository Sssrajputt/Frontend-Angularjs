import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = '../assets/BL_logo_square_jpg.jpg'; // Path to BridgeLabz logo
  url = 'https://www.bridgelabz.com';
  userName: string = ''; // Property for two-way binding

  onClick($event: any): void {
    console.log('Logo clicked!', $event);
    window.open(this.url, '_blank'); // Open BridgeLabz site in a new tab
  }
}
