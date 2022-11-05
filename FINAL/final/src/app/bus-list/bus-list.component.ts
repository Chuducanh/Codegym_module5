import { Component, OnInit } from '@angular/core';
import {BusService} from "../service/bus.service";
import {Bus} from "../model/bus";


@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  indexPagination: number = 0;
  public value = '';
  bus;
  id: number;

  constructor(private busService: BusService) {
  }

  ngOnInit() {
    this.getAll(this.indexPagination);
  }

  getAll(indexPagination) {
    this.busService.getAll(indexPagination).subscribe(
      data => {
        this.bus = data;
      });
  }


  changeId(id: number) {
    this.id = id;
  }

  delete(id: number) {
    this.busService.delete(id).subscribe(() => {
      alert('Delete successfully');
      this.getAll(0);
    }, error => {
      alert('Loi');
    });
  }


  search(page) {
    this.busService.search(this.value, page).subscribe(data => {
      if (data === null) {
        alert("Không tìm thấy");
        this.getAll(0);
      } else {
        this.bus = data;
      }
    });
  }

  firstPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination >= this.bus.totalPages) {
      this.indexPagination = this.indexPagination - 1;
      this.ngOnInit();
    }
    this.busService.getAll(this.indexPagination).subscribe(data => {
      this.bus = data;
    })
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == -1) {
      this.indexPagination = 0;
      this.ngOnInit();
    } else {
      this.busService.getAll(this.indexPagination).subscribe(data => {
        this.bus = data;
      })
    }
  }


  lastPage() {
    this.indexPagination = this.bus.totalPages-1;
    this.busService.getAll(this.indexPagination).subscribe(data => {
      this.bus = data;
    })
  }


}
