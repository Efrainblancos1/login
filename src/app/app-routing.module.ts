import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Nuevo de repositorio de Asly
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Componentes
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  //nuevo de repositorio de Asly
  { path: 'auth',  loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule) },
  { path: 'ludy-wifi-pass',   loadChildren: () => import ('./ludy-wifi-pass/ludy-wifi-pass.module').then( m => m.LudyWifiPassModule)},
  { path: '404',  component: ErrorPageComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
