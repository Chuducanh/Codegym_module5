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

  getAll(): Observable<Bus[]> {
    return this.http.get<Bus[]>(apiUrl + '/bus');
  }

  findById(id: number): Observable<Bus> {
    return this.http.get<Bus>( `${apiUrl}/bus/${id}`);
  }
  // @ts-ignore
  delete(id: number): Observable<Bus> {
    return this.http.delete<Bus>(`${apiUrl}/bus/${id}`);
  }
  // @ts-ignore
  update(id: number, Bus: Bus): Observable<Bus> {
    return this.http.put<Bus>(`${apiUrl}/bus/${id}`, Bus);
  }

}
