import { Component } from '@angular/core';
import { KeycloakService } from '../../service/keycloak.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(private keycloakService: KeycloakService){}

  async logout(){
    this.keycloakService.logout();
  }
}
