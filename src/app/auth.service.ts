import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdminLoggedIn: boolean = false;
  private isAuthenticated: boolean = false;

  //user function

  userlogout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  //Admin function
  constructor(private router: Router, private http: HttpClient) {}
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.isAdminLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isAdminLoggedIn = false;
    this.router.navigate(['/admin']);
  }

  isLoggedIn(): boolean {
    return this.isAdminLoggedIn;
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('assets/users.json');
  }
}
