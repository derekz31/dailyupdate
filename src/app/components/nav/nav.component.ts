import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
//    private flashMessage:FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
  //  this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }
}
