import { CanActivateFn, Router } from "@angular/router";
import { KeycloakService } from "../keycloak.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = () => {
    const keycloackService = inject(KeycloakService);
    const router = inject(Router);
    if (keycloackService.keycloak?.isTokenExpired()) {
        router.navigate(['login']);
        return false;
    }
    return true;
}