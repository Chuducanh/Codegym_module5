import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Account} from "../account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rfLogin: FormGroup;

  constructor(private _formBuilder:FormBuilder) {
    this.rfLogin=this._formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    // @ts-ignore
    let email = document.getElementById("inputEmail").value
    alert("Bạn đã đăng nhập thành công " + email);
  }

}
