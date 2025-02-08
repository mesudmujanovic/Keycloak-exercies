import { KeycloakService } from "../app/service/keycloak.service";

export function kcFactory(kcService: KeycloakService) {
    return () => kcService.init(); 
  }