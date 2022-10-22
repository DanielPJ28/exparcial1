import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/entities/juego';
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  listaJuegos: Juego[] | undefined;
  constructor(private juegosService: JuegosService) { }

  ngOnInit(): void {

    this.juegosService.juegosSelect().subscribe(
      (res) => { 
        //console.log(res);
        this.listaJuegos = JSON.parse(JSON.stringify(res));
      }
  )
}


  

}
