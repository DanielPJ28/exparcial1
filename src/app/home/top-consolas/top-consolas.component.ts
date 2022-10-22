import { Component, OnInit } from '@angular/core';
import { TopConsola } from 'src/app/entities/topconsola';
import { TopConsolaService } from 'src/app/services/top-consola.service';

@Component({
  selector: 'app-top-consolas',
  templateUrl: './top-consolas.component.html',
  styleUrls: ['./top-consolas.component.css']
})
export class TopConsolasComponent implements OnInit {
  listaTop: TopConsola[] |undefined;

  constructor(private topConsolaService:TopConsolaService) { }

  ngOnInit(): void {
    this.topConsolaService.topConsolaSelect().subscribe(
    (res)=>{
    this.listaTop=  JSON.parse(JSON.stringify(res));
    }
    )
  }

}
