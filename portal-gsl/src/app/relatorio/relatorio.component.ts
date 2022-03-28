import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { RelatorioService } from './relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor(private service : RelatorioService, private http: HttpService) { }

  relatorio_mes = null;
  mes_selecionado = 1;

  ngOnInit(): void {
  }

  relatorio(){
    this.http.getRelatorio(this.mes_selecionado).subscribe(r => {
      this.relatorio_mes = r;
      console.log(this.relatorio_mes)
    });
  }

  onChange(event){
    this.mes_selecionado = event;
  }
}
