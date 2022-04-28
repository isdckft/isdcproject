import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-module/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }
  
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }

}
