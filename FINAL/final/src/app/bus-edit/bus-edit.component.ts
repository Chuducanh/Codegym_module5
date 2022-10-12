import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BusService} from "../service/bus.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bus-edit',
  templateUrl: './bus-edit.component.html',
  styleUrls: ['./bus-edit.component.css']
})
export class BusEditComponent implements OnInit {

  formEdit: FormGroup;
  id: number;

  constructor(private busService: BusService, private activatedRoute: ActivatedRoute,
              private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.formEdit = this.fb.group({
        id: [],
        type: ['', [Validators.required]],
        house: ['', [Validators.required]],
        arrive: ['', [Validators.required]],
        destination: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^(090|093|097)\d{7}$/)]],
        email: ['', [Validators.required, Validators.email]],
        startTime: ['', [Validators.required]],
        endTime: ['', [Validators.required]],
      });

    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.busService.findById(this.id).subscribe(bus => {
      this.formEdit.patchValue(bus);
    });
  }

  onSubmit(id: number) {
    const product = this.formEdit.value;
    this.busService.update(id, product).subscribe(() => {
      alert('Update Successfully');
      this.router.navigateByUrl('bus/list');
    }, error => {
      alert('Loi');
    });
  }

  get type() {
    return this.formEdit.get('type');
  }
  get house() {
    return this.formEdit.get('house');
  }
  get arrive() {
    return this.formEdit.get('arrive');
  }
  get destination() {
    return this.formEdit.get('destination');
  }
  get phone() {
    return this.formEdit.get('phone');
  }
  get email() {
    return this.formEdit.get('email');
  }
  get startTime() {
    return this.formEdit.get('startTime');
  }

  get endTime() {
    return this.formEdit.get('endTime');
  }


}
