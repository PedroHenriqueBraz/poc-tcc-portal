import { Injectable } from '@angular/core';
import { Relatorio } from '../relatorio.model';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpService) { }

  relatorio : Relatorio;

  obterRelatorio(mes){
    this.http.getRelatorio(mes).subscribe(r => {
      this.relatorio = r;
      
      console.log(this.relatorio);
    });
  }
}
