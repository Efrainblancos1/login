import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {FormularioComponent} from './pages/formulario/formulario.component'
import {HomeComponent} from './pages/home/home.component';
import {SolicitarTComponent} from './pages/solicitar-t/solicitar-t.component'

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'formulario', component: FormularioComponent },
      { path: 'listar tokens', component: SolicitarTComponent},
      { path: 'home', component: HomeComponent },
      {path: '**', redirectTo: 'formulario'},


    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class ConsultaFormModule { }
