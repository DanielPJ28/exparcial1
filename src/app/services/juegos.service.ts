import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) { }
  juegosSelect(){
    const ruta = "https://date.nager.at/api/v2/publicholidays/2020/US";
    return this.http.get(ruta);
  }

}
