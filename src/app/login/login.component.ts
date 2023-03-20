import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FosaService } from '../fosa.service';
import { LoginValidation } from '../loginValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fosa:FosaService,private router:Router){
  }
// array  to store login detail
  loginArr:LoginValidation[]=[];

// to validate user is valid or not 

  submitLogin(name:string,password:string){
    this.loginArr=this.fosa.getAllLoginDetails();
    for(let i of this.loginArr){
      if(i.userName==name && i.password==password){
        return this.router.navigate(['/home']);
      }
  }
  return alert("Invalid details");
}

}
