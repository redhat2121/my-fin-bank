import { NgModule, Renderer2 } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './admin/customers/customers.component';
import { AccountsComponent } from './admin/accounts/accounts.component';
import { EmailNotificationsComponent } from './admin/email-notifications/email-notifications.component';
import { ChatComponent } from './admin/chat/chat.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    WelcomeComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    CustomersComponent,
    AccountsComponent,
    EmailNotificationsComponent,
    ChatComponent,
    RegistrationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
