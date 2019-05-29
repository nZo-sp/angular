import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../auth/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private authService: AuthenticationService) { }
    username: string;
    password: string;
    ngOnInit() {
    }
    login() : void {

        // Per il backend in express, usare "test" come user e password
        this.authService.login(this.username, this.password).subscribe(user => {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.router.navigate(["search"]);
            }
        });
    }
}