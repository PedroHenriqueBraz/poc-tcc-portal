import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private router: Router) { }

  login(user: any) {
    this.signIn(user);

    return new Promise((resolve) => {
     // window.localStorage.setItem('token', 'meu-token');
      resolve(true);
    });
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    });
  }

  private signIn(user: any){
    let authenticationDetails = new AuthenticationDetails({
      Username: user.email,
      Password: user.password,
  });

  let poolData = {
    UserPoolId: environment.cognitoUserPoolId, 
    ClientId: environment.cognitoAppClientId 
  };

  let userPool = new CognitoUserPool(poolData);
  let userData = { Username: user.email, Pool: userPool };
  var cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      console.log(result);
     // this.router.navigate(["/relatorio"])
    },
    onFailure: (err) => {
      console.log(err);
      alert(err.message || JSON.stringify(err));
    },

    newPasswordRequired: function(userAttributes, requiredAttributes) {
      cognitoUser.completeNewPasswordChallenge(
          user.password,
          requiredAttributes,
          this
      )
  }
  });
  }
}
