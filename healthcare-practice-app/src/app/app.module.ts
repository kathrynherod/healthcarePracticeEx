import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { MembersComponent } from './members/members.component';
import { ClaimsComponent } from './claims/claims.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersComponent,
    MembersComponent,
    ClaimsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
