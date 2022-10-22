import { Component, OnInit } from '@angular/core';
import { TopJuegos } from '../../entities/top';
import { TopService } from '../../services/top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
}) 

export class TopComponent implements OnInit {

  listaTop: TopJuegos[] | undefined;

  constructor(private topService: TopService) { }

  ngOnInit(): void {
    this.topService.topSelect().subscribe(
      (res) => {
        this.listaTop= JSON.parse(JSON.stringify(res));
        console.log(this.listaTop);
      }
    )
  }

}
