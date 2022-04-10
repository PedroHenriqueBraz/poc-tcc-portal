import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EntregasComponent implements OnInit {

  constructor(private http: HttpService) { }
  entregas = null;
  detalhes = null;
  cliente_selecionado = 1;
  columnsToDisplay = ['clienteId', 'mercadoriaId', 'valorFrete', 'dataEntrega', 'detalhes'];
  expandedElement: null;

  ngOnInit(): void {
   
  }

  onChange(event){
    console.log(event);
    this.cliente_selecionado = event.value;
  }

  obterEntregas(){
    this.http.getEntregasPorCliente(this.cliente_selecionado).subscribe(i => {
      this.entregas = i;
      console.log(this.entregas);
    });
  }

  verDetalhes(entrega): any{
    this.http.getEntregas(entrega.id).subscribe(i => {
      this.detalhes = i;
      console.log(this.detalhes);
    });
  }

}
