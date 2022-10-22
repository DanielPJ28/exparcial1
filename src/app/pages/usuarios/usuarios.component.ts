import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/entities/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaServiciosCliente: Usuario[] |undefined; //array
  servicioElegido: Usuario | undefined; //elemento
  @Input() usuarioX: Usuario | undefined;

  constructor(private usuariosService : UsuariosService ) /*acceder a ProveedoresService*/{ }

  /*Recurar los datos de la web proveedores.php*/
  ngOnInit(): void {
    this.usuariosService.usuariosSelect().subscribe(
      (res) => { //El => hace referencia a un tipo funcion
        this.listaServiciosCliente = JSON.parse(JSON.stringify(res));//Para que el sistema sepa que proveedores es de tipo JSON
      }
    )
  }

  seleccionarItem(itemSeleccionado: Usuario){
    console.log(itemSeleccionado);
    this.servicioElegido = itemSeleccionado;
  }

  ngOnChanges(): void {
    this.usuariosService.usuariosSelect().subscribe(
      (res) => { //El => hace referencia a un tipo funcion
        this.listaServiciosCliente = JSON.parse(JSON.stringify(res));//Para que el sistema sepa que proveedores es de tipo JSON
      }
    )
  }

}
