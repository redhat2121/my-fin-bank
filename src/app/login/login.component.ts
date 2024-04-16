import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  userName: string;
  email: string;
  userPassword: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  users: User[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      },
    );
  }

  onSubmit() {
    const user = this.users.find(
      (u) => u.userName === this.username && u.userPassword === this.password,
    );
    if (user) {
      // Set success message and clear after 3 seconds
      this.successMessage = 'Login successful!';
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
      this.router.navigate(['/customer-dashboard']);
    } else {
      // Set error message and clear after 3 seconds
      this.errorMessage = 'Invalid username or password. Please try again.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    }
  }
}
