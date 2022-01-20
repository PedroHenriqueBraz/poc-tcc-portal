import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { AuthGuard } from './guard/shared/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: RelatorioComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }