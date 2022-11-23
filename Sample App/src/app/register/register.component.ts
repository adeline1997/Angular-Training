import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  titlecasePipe: any;

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('f') loginForm!: NgForm;

  Register(){
    alert("Sign up successful!");
    console.log(this.loginForm.value);
  }
}
