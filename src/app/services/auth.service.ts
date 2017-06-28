import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class AuthService {
  isLogin$:BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
  getLogin$ (){
    return this.isLogin$.asObservable();
  }

  login(){
    this.isLogin$.next(true);
  }

  logout(){
    this.isLogin$.next(false);
  }

}
