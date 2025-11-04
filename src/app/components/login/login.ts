import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
username = '';
password = '';

constructor(private authService: Auth, private router: Router){}

onLogin(){
if(this.authService.login(this.username, this.password)){
  this.router.navigate(['/']);
}
else{
  alert('Invalid Credentials');
}
}
}
