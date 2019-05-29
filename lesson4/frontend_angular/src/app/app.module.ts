import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatDialogModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule, MatExpansionModule, MatProgressSpinnerModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { AboutButtonComponent } from './about-button/about-button.component';
import { MovieSearchService } from './movie-search.service';
import { MovieFinderComponent } from './movie-finder/movie-finder.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {MovieCommentsService} from "./movie-comments.service";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./router/app.routing";
import {MovieSearchComponent} from "./movie-search/movie-search.component";
import {AuthenticationService} from "./auth/authentication.service";
import {AuthGuardService} from "./auth/auth-guard.service";
import {JwtInterceptor} from "./interceptor/jwt-interceptor";
import {ErrorInterceptor} from "./interceptor/error-interceptor.service";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatDialogModule,
        MatRippleModule,
        MatFormFieldModule,
        MatListModule,
        MatSelectModule,
        HttpClientModule,
        MatInputModule,
        MatExpansionModule,
        FormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        MatProgressSpinnerModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        AboutDialogComponent,
        MasterDetailComponent,
        AboutButtonComponent,
        MovieFinderComponent,
        MovieDetailComponent,
        MovieSearchComponent,
        LoginComponent
    ],
    entryComponents: [
        AboutDialogComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        MovieSearchService,
        MovieCommentsService,
        AuthenticationService,
        AuthGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
})
export class AppModule {}
