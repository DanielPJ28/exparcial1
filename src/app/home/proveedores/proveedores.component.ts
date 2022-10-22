import { Component, OnInit } from '@angular/core';
import { Proveedores } from 'src/app/entities/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  listaProveedores: Proveedores[] |undefined;

  constructor(private proveedoresService: ProveedoresService ) { }
 
 
  ngOnInit(): void {
    this.proveedoresService.proveedoresSelect().subscribe(
      (res) => { 
        this.listaProveedores = JSON.parse(JSON.stringify(res));
      }
    )
}
}
