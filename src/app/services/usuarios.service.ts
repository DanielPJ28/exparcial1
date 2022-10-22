import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  
  usuariosSelect(){
    const ruta = "https://servicios.campus.pe/servicioclientes.php"
    return this.http.get(ruta);
  }
}
