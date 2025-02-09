import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";
import { UserProfile } from '../interface/user-profile';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;
  public _profile: UserProfile | undefined;

  get Profile(): UserProfile | undefined{
    return this._profile;    
  };

  get keycloak() {
    if (!this._keycloak) {
       this._keycloak = new Keycloak({
        url: "http://localhost:9090",
        realm: "book-social-network",
        clientId: "bsn"
       })
    }
    return this._keycloak;
  };

  login() {
    return this._keycloak?.login();
  };

  logout() {
    return this._keycloak?.logout({redirectUri: "http:localhost:4200"});
  };

  async init() {
    const authentication = await this.keycloak?.init({
      onLoad: "login-required"
    });

    if (authentication) {
      this._profile = (await this._keycloak?.loadUserProfile() as UserProfile);
      this._profile.token = this.keycloak.token;
    } else {
      console.log("User not authenticated");
      this.keycloak?.login();
    }
  }

}
