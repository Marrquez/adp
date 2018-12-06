import { Component, OnInit } from '@angular/core';

/**
 * services
 * */
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  logoutUser(){
    this.authService.logoutUser();
  }
}
