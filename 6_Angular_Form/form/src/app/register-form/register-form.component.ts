import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

export class RegisterFormComponent implements OnInit {
  rfRegister: FormGroup;
  country=['Anh','Mỹ','Hàn Quốc'];
  constructor(private _formBuilder:FormBuilder) {
    this.rfRegister=this._formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      country:[this.country,Validators.required],
      age:['',[Validators.required,Validators.min(18)]],
      gender:['',Validators.required],
      phone:['',[Validators.required,Validators.pattern(/^\+84\d{9,10}$/)]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.rfRegister.value);
  }

}
