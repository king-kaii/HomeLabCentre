import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  hidePassword: boolean = true;
  constructor(private fb: FormBuilder,private authService: AuthService, private router:Router){
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required , Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    })

  }
  toggele(){
    this.hidePassword = !this.hidePassword;
  }
  gotoSignup(){
   this.router.navigate(['/auth/signup'])
  }

  login(){
   this.authService.login(this.form.value).subscribe((res)=>{
    console.log(res);
    
    })
    this.form.reset();
   
  }

}
