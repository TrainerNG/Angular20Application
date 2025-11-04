import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private isAuthenticated = false;
  
  login(username: string, password: string): boolean{
   if(username && password){
    this.isAuthenticated = true;
    return true;
   }
   return false;
  }

  logout(){
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean{
    return this.isAuthenticated;
  }
}
