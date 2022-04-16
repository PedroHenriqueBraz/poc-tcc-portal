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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { AuthModule } from '@auth0/auth0-angular';

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
    RouterModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule, 
    MatIconModule,
    MatMenuModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-kx6dw22k.us.auth0.com',
      clientId: '7RRy0WQr1hfrYCIuEZZDDIy1xLKagztp'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
