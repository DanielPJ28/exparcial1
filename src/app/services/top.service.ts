import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopService {

  constructor(private http: HttpClient) { }

  topSelect(){
    const ruta="https://brunoraffwebservice.000webhostapp.com/juegos.php ";
    return this.http.get(ruta);    
  }
}
