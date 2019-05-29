import {Routes} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {MovieSearchComponent} from "../movie-search/movie-search.component";
import {AuthGuardService} from "../auth/auth-guard.service";

/*
Qui è definita la lista dei percorsi accessibili tramite path.

Notare canActivate solo sul path "search"... Significa che è possibile accedere alla pagina solo se la condizione
inserita all'interno della funzione "canActivate" nel servizio "AuthGuardService" ha successo.

 */
export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'search', component: MovieSearchComponent, canActivate: [AuthGuardService]},
  { path: '', component: LoginComponent }
];
