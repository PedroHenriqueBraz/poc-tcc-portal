import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { AuthComponent } from './layout/auth/auth.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { EntregasComponent } from './entregas/entregas.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatorioComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    IndicadoresComponent,
    EntregasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
