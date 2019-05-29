import { Component } from '@angular/core';
import {AuthenticationService} from "./auth/authentication.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    titleText = 'Angular course: lesson 4';

    constructor(private authService: AuthenticationService) {
    }

    logout() {
        this.authService.logout();
    }
}
