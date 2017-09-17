import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './Components/sandbox/sandbox.component';
import { DataService } from './Services/data.services';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

const appRoutes: Routes = [
      {path:'', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'user/:id', component:UserDetailsComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
