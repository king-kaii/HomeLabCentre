import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!:FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService,private router: Router){
  
  }
  

  ngOnInit(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      DOB: ['',[Validators.required, Validators.minLength(6)]]
    })
  }
  gotoLogin(){
   this.router.navigate(['/auth/login'])
  }

  signup(){
    console.log(this.form.value);
    
    if (this.form.valid) {
      const formData = this.form.value
      console.log('sm',formData);
      
   this.authService.signUp(formData).subscribe((res:any)=>{
    console.log('Data posted',res)}
    
   )
  console.log('done');
  
  }
  }
}
