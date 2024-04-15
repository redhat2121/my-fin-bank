import { Component } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> origin/master
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
<<<<<<< HEAD
  btnColor = 'rgb(100, 150, 200)';
=======
>>>>>>> origin/master

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formControls = this.fb.group({
<<<<<<< HEAD
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{1}[a-zA-Z0-9]{2,6}[0-9]?$|^.{4,12}$')]],
      email: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@#$%^&+=!])(?=.{4,12}$).*')]],
=======
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
>>>>>>> origin/master
    });
  }

  signup() {
    const userData = {
<<<<<<< HEAD
      userName: this.formControls.value.userName,
      email: this.formControls.value.email,
      userPassword: this.formControls.value.userPassword,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('http://localhost:3000/users', userData, httpOptions).subscribe(
      (response: any) => {
        this.successMessage = 'Signup successful, redirecting to login';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      (error) => {
        this.errorMessage = 'Signup error';
        this.successMessage = '';
      }
    );
=======
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
>>>>>>> origin/master
  }
}
