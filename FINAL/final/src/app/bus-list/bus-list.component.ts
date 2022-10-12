import { Component, OnInit } from '@angular/core';
import {BusService} from "../service/bus.service";
import {Bus} from "../model/bus";


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  p: number = 1;
  bus: Bus[];
  id: number;

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.busService.getAll().subscribe(
      data => {
        this.bus = data;
      });
  }

  delete(id: number) {
    this.busService.delete(id).subscribe(() => {
      alert('Delete successfully');
      this.getAll();
    }, error => {
      alert('Loi');
    });
  }


}
