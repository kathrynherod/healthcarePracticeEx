import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { MembersComponent } from './members/members.component';
import { ClaimsComponent } from './claims/claims.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateClaimComponent } from './create-claim/create-claim.component';
import { ViewAccountComponent } from './view-account/view-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    MembersComponent,
    ClaimsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CreateClaimComponent,
    ViewAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ClaimsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'members', component: MembersComponent },
      { path: 'providers', component: ProvidersComponent },
      { path: 'create', component: CreateClaimComponent },
      { path: 'account', component: ViewAccountComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
