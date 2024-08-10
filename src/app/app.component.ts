import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'this loaded dynamically';
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  isDisabled = false;
  isActive = true;

  userName = 'John Doed';

  onClick() {
    this.isActive = !this.isActive;
  }

  onInput(event: any) {
    console.log(event.target.value);
  }

  onEnter(user: HTMLInputElement) {
    console.log('Enter was pressed');
    console.log(user.value);
  }

  updateUsername(user: HTMLInputElement) {
    this.userName = user.value;
  }
}
