import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // isLogged = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // this.isLogged = this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
  }
}
