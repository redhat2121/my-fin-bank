import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private apiUrl = 'http://localhost:8080/api'; // Backend API URL please make sure you run "server.js" file to work properly

  constructor(private http: HttpClient) {}

  deposit(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/deposit`, { amount });
  }

  withdraw(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/withdraw`, { amount });
  }

  transferFunds(amount: number, recipient: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer`, { amount, recipient });
  }

  transferToLoan(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer-loan`, { amount });
  }

  transferToRecurringDeposit(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer-recurring-deposit`, {
      amount,
    });
  }

  transferToFixedDeposit(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer-fixed-deposit`, { amount });
  }

  sendMessageToBank(message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-message`, { message });
  }

  // Print function that formats messages in separate boxes
  print(messages: any[]): void {
    messages.forEach((msg) => {
      console.log('---------------------------------');
      console.log(`Type: ${msg.type}`);
      console.log(`Content: ${msg.content}`);
      console.log('---------------------------------');
    });
  }
}
