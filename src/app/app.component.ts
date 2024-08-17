import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppNavbar,
    HeaderComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'this loaded dynamically';
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  isDisabled = false;
  isActive = true;

  userName = 'John Doe';
  userRole = 'Admin';

  users = ['John Doe', 'Jane Doe', 'Jim Doe'];

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

  onAddUser() {
    this.users.push(this.userName);
  }

  onRemoveUser(index: number) {
    this.users.splice(index, 1);
  }
}
