import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private authService:AuthService) {
    this.authService.isLogin$.subscribe(login=> {
      this.isLogin = login;
      console.log(login);
    });
  }

  ngOnInit() {
  }


  logout(){
    this.authService.logout();
  }
}
