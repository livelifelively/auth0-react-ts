import * as auth0 from 'auth0-js';
import {AuthOptions} from 'auth0-js';
import * as jwtDecode from 'jwt-decode';
import config from '../../config/app';

import {SignUp, ChangePassword} from './interfaces';
import { dispatch } from '../store';

class Authentication {
  private static ACCESS_TOKEN_KEY: string = 'auth0_access_token';
  private static ID_TOKEN_KEY: string = 'auth0_id_token';
  private CONNECTION_NAME: string = 'Samagr-Username-Password-Authentication';

  private appConfig: AuthOptions = {
    domain: config.auth0.domain,
    clientID: config.auth0.clientID,
    redirectUri: `${window.location.origin}/callback`,
    audience: config.auth0.audience,
    responseType: config.auth0.responseType,
    scope: config.auth0.scope
  };

  private auth = new auth0.WebAuth(this.appConfig);

  static setAccessToken(accessToken: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
  }

  static getAccessToken() {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  static setIdToken(idToken: string) {
    localStorage.setItem(this.ID_TOKEN_KEY, idToken);
  }

  static getIdToken() {
    return localStorage.getItem(this.ID_TOKEN_KEY);
  }

  static getTokenExpirationDate(encodedToken: string) {
    const token: any = jwtDecode(encodedToken);
    if (!token.exp) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(token.exp);

    return date;
  }

  static clearAccessToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY);
  }

  static clearIdToken() {
    localStorage.removeItem(this.ID_TOKEN_KEY);
  }

  login(email: string, password: string, cb: any): void {
    this.auth.login(
      {
        email,
        password,
        realm: this.CONNECTION_NAME
      },
      cb
    );
  }

  signup(signupDetails: SignUp, cb: any): void {
    this.auth.signup(
      {
        email: signupDetails.email,
        password: signupDetails.password,
        connection: this.CONNECTION_NAME,
        user_metadata: {
          gender: signupDetails.gender,
          birthYear: signupDetails.birthYear,
          firstName: signupDetails.firstName,
          lastName: signupDetails.lastName
        }
      },
      cb
    );
  }

  resetPassword(changePassword: ChangePassword, cb: any): void {
    this.auth.changePassword(
      {
        connection: this.CONNECTION_NAME,
        email: changePassword.email
      },
      cb
    );
  }

  logout(): void {
    // dispatch(resetRootState());
    this.constructor().clearAccessToken();
    this.constructor().clearIdToken();
  }

  parseHash(hash: string, cb: any): void {
    this.auth.parseHash({hash}, cb);
  }

  getUserInfo(accessToken: string, cb: any): void {
    this.auth.client.userInfo(accessToken, cb);
  }

  isTokenExpired(token: string): boolean {
    const expirationDate = this.constructor().getTokenExpirationDate(token);
    return expirationDate < new Date();
  }

  isLoggedIn() {
    const idToken = this.constructor().getIdToken();
    return !!idToken && !this.isTokenExpired(idToken);
  }
}

export default Authentication;
