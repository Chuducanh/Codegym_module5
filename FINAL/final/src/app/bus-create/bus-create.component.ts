import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BusService} from "../service/bus.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bus-create',
  templateUrl: './bus-create.component.html',
  styleUrls: ['./bus-create.component.css']
})
export class BusCreateComponent implements OnInit {

  formCreate: FormGroup;

  constructor(private busService: BusService, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.formCreate = this.fb.group({
      id: ['', [Validators.required]],
      type: ['', [Validators.required]],
      house: ['', [Validators.required]],
      arrive: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^(090|093|097)\d{7}$/)]],
      email: ['', [Validators.required, Validators.email]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
    });

  }

  onSubmit() {
    const product = this.formCreate.value;
    this.busService.create(product).subscribe(() => {
      alert('Create Successfully');
      this.router.navigateByUrl('bus/list');
    }, error => {
      alert('Loi');
    });
  }

}
