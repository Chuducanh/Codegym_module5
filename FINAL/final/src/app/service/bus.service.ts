import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Bus} from "../model/bus";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const apiUrl = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getAllWithoutPagination(): Observable<Array<Bus>> {
    return this.http.get<Array<Bus>>(apiUrl + "/not-pagination");
  }

  getAll(page): Observable<any[]> {
    return this.http.get<any[]>(apiUrl + "?page=" + page);
  }

  findById(id: number): Observable<Bus> {
    return this.http.get<Bus>( `${apiUrl}/${id}`);
  }

  delete(id: number): Observable<Bus> {
    return this.http.delete<Bus>(`${apiUrl}/${id}`);
  }

  update(id: number, Bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${apiUrl}/${id}`, Bus);
  }

  create(Bus: Bus) {
    return this.http.post<Bus>(apiUrl , Bus);
  }

  search(value, page):Observable<any[]>
  {
    return this.http.get<any[]>(apiUrl + "/search?finding=" + value + '&page=' + page);
  }

}
