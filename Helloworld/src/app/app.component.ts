import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Fixed typo: styleürls -> styleUrls
})
export class AppComponent {
  title = 'Helloworld';

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz."; // Initializes the title when the component is loaded
  }
}
