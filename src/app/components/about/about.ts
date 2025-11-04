import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Counter } from '../../services/counter';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
resolvedData: any;

constructor(private route: ActivatedRoute, 
  public counterService: Counter, 
  private router: Router,
  private authServie: Auth){}

ngOnInit(){
this.resolvedData = this.route.snapshot.data['ameer'];
}

increment(){
  this.counterService.increment();
}

logout(){
  this.router.navigate(['login']);
  this.authServie.logout();
}
}
