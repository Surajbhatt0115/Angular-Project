import { Component } from '@angular/core';
import { FosaService } from '../fosa.service';
import { LoginValidation } from '../loginValidation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    edit:boolean=false;
    signupsucess:boolean=false;
    username!:string;
    password!:string;
    name!:string;
   constructor(private s:FosaService){}
   // showing the hidden templates 
   signup(){
      this.edit=true;
      
    }
    //saving the user details in array object .
    save(){
        let a=new LoginValidation(this.username,this.password);
      this.s.loginArr.push(a);
      this.edit=false;
      this.signupsucess=true;
      }
    

  }
