import { Component, OnInit } from '@angular/core';
import { KeycloakService } from '../../service/keycloak.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private keycloakService: KeycloakService){}

  async ngOnInit(): Promise<void> {
   await this.keycloakService.init();
   await this.keycloakService.login();
  };

}
