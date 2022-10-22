import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopConsolaService {

  constructor(private http: HttpClient) { }
  topConsolaSelect(){
    const ruta = "https://mauricioquine1.000webhostapp.com/topventas.php";
    return this.http.get(ruta);
  }
}
