import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './pages/team/team.component';
import { InstallationsComponent } from './pages/installations/installations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    TeamComponent,
    InstallationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
