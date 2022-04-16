import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Indicadores } from '../indicadores.model';
import { Relatorio } from '../relatorio.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getRelatorio(mes) {
    return this.http.get<Relatorio>(`${environment.apiMGE}/relatorio/financeiro/${mes}`);
  }

  getIndicadores() {
    return this.http.get<Indicadores>(`${environment.apiMGE}/indicadores`);
  }

  getEntregas(idEntrega) {
    return this.http.get<any>(`${environment.apiMSC}/fluxoentrega/${idEntrega}`);
  }

  getEntregasPorCliente(idCliente) {
    return this.http.get<any>(`${environment.apiMSC}/fluxoentrega/cliente/${idCliente}`);
  }

  getCliente(id) {
    return this.http.get<any>(`${environment.apiMIC}/cliente/${id}`);
  }
}
