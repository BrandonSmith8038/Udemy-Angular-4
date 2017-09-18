import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// AngularFire Imports

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/Auth';

// Component Imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


// Service Imports

import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-client', component: AddclientComponent},
];

export const firebaseConfig = {
  apiKey: 'AIzaSyAwNwxfJW4HdgqleVxX82sxY-P2TCzdiv8',
  authDomain: 'client-panel-67f2a.firebaseapp.com',
  databaseURL: 'https://client-panel-67f2a.firebaseio.com',
  storageBucket: 'client-panel-67f2a.appspot.com',
  messagingSenderId: '757474953487'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientdetailsComponent,
    AddclientComponent,
    EditclientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule
  ],
  providers: [AngularFireAuth, AngularFireDatabase, ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
