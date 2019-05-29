import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

/*
Angular’s route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route.
They make this decision by looking for a true or false return value from a class which implements the given guard interface.

https://angular.io/guide/router
 */

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private authService: AuthenticationService, private router: Router) { }
    /*
        Per tutte le pagine in cui è impostato questo guardiano,
        viene preventivamente controllato se l'utente è loggato,
        in caso negativo rimandiamo l'utente alla pagina di login.
     */
    canActivate(): boolean {

        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}
