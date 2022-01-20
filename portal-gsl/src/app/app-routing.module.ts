import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { HomeComponent } from './layout/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'relatorio', component: RelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
