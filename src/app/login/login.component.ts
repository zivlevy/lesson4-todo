import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../classes/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser:User = new User();

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
    this.router.navigate(['/todo'])

  }
//TODO remove
  get diagnostic() { return JSON.stringify(this.currentUser); }
}
