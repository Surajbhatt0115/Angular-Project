import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUSComponent {
  constructor(private router:Router){
  }
  // routing to hame component
  goBack=()=>this.router.navigate(['/home']);
}
