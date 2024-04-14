import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  depositAmount: number = 70000;
  withdrawAmount: number = 5000;
  transferAmount: number = 10000;
  recipientAccount: string = '';
  chatMessage: string = '';
  transactionID: string = '';
  chatMessages: string[] = [];
  successMsg: any = {};

  constructor(private authService: AuthService, private router: Router, private bankService: BankService) { }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  withdraw() {
    this.bankService.withdraw(this.withdrawAmount).subscribe(response => {
      this.showSuccessMsg('Withdrawal successful', 'Your ' + this.withdrawAmount + ' Rupees have been withdrawn successfully.');
      this.withdrawAmount = 0;
    });
  }

  transferFunds() {
    this.bankService.transferFunds(this.transferAmount, this.recipientAccount).subscribe(response => {
      this.showSuccessMsg('Transfer successful', 'Your ' + this.transferAmount + ' Rupees have been transferred successfully to ' + this.recipientAccount);
      this.transferAmount = 0;
    });
  }

  generateTransactionID() {
    this.transactionID = Math.random().toString(36).substring(2, 11);
    console.log('Transaction ID:', this.transactionID);
  }

  transferToLoan() {
    this.bankService.transferToLoan(this.transferAmount).subscribe(response => {
      this.showSuccessMsg('Loan transfer successful', 'Your ' + this.transferAmount + ' Rupees have been transferred to loan successfully.');
    });
  }

  transferToRecurringDeposit() {
    this.bankService.transferToRecurringDeposit(this.transferAmount).subscribe(response => {
      this.showSuccessMsg('Recurring Deposit transfer successful', 'Your ' + this.transferAmount + ' Rupees have been transferred to Recurring Deposit successfully.');
    });
  }

  transferToFixedDeposit() {
    this.bankService.transferToFixedDeposit(this.transferAmount).subscribe(response => {
      this.showSuccessMsg('Fixed Deposit transfer successful', 'Your ' + this.transferAmount + ' Rupees have been transferred to Fixed Deposit successfully.');
    });
  }

  sendMessage() {
    this.chatMessages.push(`Customer: ${this.chatMessage}`);
    this.bankService.sendMessageToBank(this.chatMessage).subscribe(response => {
      // Handle response if needed
    });
    this.chatMessage = '';
  }

  deposit() {
    this.bankService.deposit(this.depositAmount).subscribe(response => {
      this.showSuccessMsg('Deposit successful', 'Your ' + this.depositAmount + ' Rupees have been deposited successfully.');
      this.depositAmount = 0;
    });
  }

  showSuccessMsg(title: string, msg: string) {
    this.successMsg = { title, msg };
    setTimeout(() => {
      this.successMsg = null;
    }, 2000);
  }
}
