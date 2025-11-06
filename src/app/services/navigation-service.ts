import { inject, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  router = inject(Router);
  auth = inject(Auth);
  constructor(){
    this.router.events.subscribe(event=>{
      // Whether user has clicked on back button / forward button
      if(event instanceof NavigationStart && event.navigationTrigger === 'popstate'){
       if(this.auth.isLoggedIn()){
        this.auth.logout();
        this.router.navigate(['login']);
       }
      }
    })
  }
}
