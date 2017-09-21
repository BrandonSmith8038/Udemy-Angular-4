import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:Boolean;
  loggedInUser:string;
  showRegister:boolean;
  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessageService:FlashMessagesService
    ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }else {
        this.isLoggedIn = false;
      }
    });
  }
  
  onLogOutClick(){
    this.authService.logout();
    this.flashMessageService.show('You Are Now Logged Out', { cssClass: 'alert-success', timeout:4000 });
    this.router.navigate(['/login']);
  }
}
