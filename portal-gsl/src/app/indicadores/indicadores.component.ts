import { Component, OnInit } from '@angular/core';
import { Indicadores } from '../indicadores.model';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {

  constructor(private http: HttpService) { }
  
  indicadores: Indicadores = null;

  ngOnInit(): void {
    this.http.getIndicadores().subscribe(i => {
      this.indicadores = i;
     // this.indicadores.clienteRentavel;
      console.log(this.indicadores);
      console.log(this.indicadores.clienteRentavel);
    });
  }

}
