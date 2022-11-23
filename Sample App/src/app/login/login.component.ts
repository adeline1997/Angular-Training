import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../service/common.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titlecasePipe: any;
  loginDetails!: User;

  constructor(private fb:FormBuilder, private commonService:CommonService,private router:Router) { }
  loginForm=this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(3),Validators.maxLength(5)]],
   });

  ngOnInit(): void {
    this.commonService.userLogin().subscribe((response)=>{
      this.loginDetails=response;
      console.log(this.loginDetails)
    })
  }
  Login(){
    this.loginForm.markAllAsTouched();
    this.loginForm.value;
    this.loginDetails;

    if (this.loginForm.valid) {
      if (this.loginDetails[0].email === this.loginForm.get('email')?.value) {
      this.router.navigateByUrl('/');
      }
      else{
      alert('invalid credentials');
      }
    }
    
    
  }
  onLogin(){
    this.commonService.dataFromLoginComponent('Data from Login Component');
  }
}
