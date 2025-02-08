import { Injectable } from '@angular/core';
import Keycloak from "keycloak-js";

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private _keycloak: Keycloak | undefined;

  get keycloak() {
    if (!this._keycloak) {
       this._keycloak = new Keycloak({
        url: "http://localhost:9090",
        realm: "book-social-network",
        clientId: "bsn"
       })
    }
    return this._keycloak;
  }

  async init() {
    console.log("Authenticatind User");
    const authentication = await this.keycloak?.init({
      onLoad: "login-required"
    });

    if (authentication) {
      console.log("User authenticated");
    } else {
      console.log("User not authenticated");
      this.keycloak?.login();
    }
  }
}
