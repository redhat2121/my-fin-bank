import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  successMessage: string | undefined;
  errorMessage: string | undefined;
  formControls: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formControls = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
    });
  }

  signup() {
    const userData = {
      userName: this.formControls.get('userName')?.value,
      email: this.formControls.get('email')?.value,
      userPassword: this.formControls.get('userPassword')?.value,
    };

    this.http.post<any>('http://localhost:3000/users', userData)
      .subscribe(response => {
        this.successMessage = 'Registration successful! Redirecting to login...';
        this.errorMessage = ''; 
        this.formControls = this.fb.group({
          userName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          userPassword: ['', Validators.required],
        });
        setTimeout(() => {
          this.router.navigateByUrl('/login'); 
        }, 2000);
      }, error => {
        this.errorMessage = 'Registration failed. Please try again.';
        this.successMessage = '';
      });
  }
}
