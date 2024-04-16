import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { ChatComponent } from './admin/chat/chat.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { EmailNotificationsComponent } from './admin/email-notifications/email-notifications.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent },
  { path: 'admin/accounts', component: AccountsComponent },
  { path: 'admin/chat', component: ChatComponent },
  { path: 'admin/customers', component: CustomersComponent },
  { path: 'admin/email-notifications', component: EmailNotificationsComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
