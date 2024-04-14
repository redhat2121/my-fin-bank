import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: string;
  userName: string;
  email: string;
  userPassword: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: User[] = [];
  newCustomer: User = { id: '', userName: '', email: '', userPassword: '' };
  selectedCustomerIndex: number = -1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<{ users: User[] }>('assets/users.json')
      .subscribe(data => {
        this.customers = data.users;
        console.log('Fetched Users:', data.users);
      });
  }

  addCustomer() {
    if (this.newCustomer.userName.trim() !== '' && this.newCustomer.email.trim() !== '' && this.newCustomer.userPassword.trim() !== '') {
      this.customers.push({ ...this.newCustomer }); // Add new customer to the array

      this.http.post<{ message: string }>('assets/users.json', { users: this.customers })
        .subscribe(response => {
          console.log(response.message);
        });

      this.newCustomer = { id: '', userName: '', email: '', userPassword: '' }; // Clear newCustomer
    }
  }

  editCustomer(index: number) {
    this.selectedCustomerIndex = index;
  }

  saveCustomer(index: number) {
    this.selectedCustomerIndex = -1;
  }

  deleteCustomer(index: number) {
    if (index >= 0 && index < this.customers.length) {
      this.customers.splice(index, 1); // Remove the customer at the specified index

      // Update users.json file after deleting the customer
      this.http.put<{ message: string }>('assets/users.json', { users: this.customers })
        .subscribe(response => {
          console.log(response.message);
        });
    }
  }
}
