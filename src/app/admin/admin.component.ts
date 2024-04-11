import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.router.navigate(['/admin-dashboard']);
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    } else {
      this.errorMessage = 'Invalid Credentials';
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']); 
  }
}
