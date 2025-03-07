import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Hello from BridgeLabz';
  imgUrl: string = 'assets/BL_logo_square_jpg.jpg';
  userName: string = '';
  nameError: string = '';

  onClick(event: Event): void {
    console.log('Logo clicked!', event);
    window.open('https://www.bridgelabz.com', '_blank');
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.userName = input.value;

    const nameRegex = /^[A-Z][a-zA-Z\s]{2,15}$/;
    if (nameRegex.test(this.userName)) {
      this.nameError = '';
      return;
    }

    this.nameError = 'Name must start with an uppercase letter and be 3-15 characters long.';
  }
}
