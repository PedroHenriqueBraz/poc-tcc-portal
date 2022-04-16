import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../shared/autenticacao.service';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor( private autService: AutenticacaoService,
    private router: Router, 
    public auth: AuthService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.autService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['/relatorio']);
    } catch (error) {
      console.error(error);
    }
  }

}
