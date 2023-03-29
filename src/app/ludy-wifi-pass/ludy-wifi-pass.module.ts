import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaFormModule } from './consulta-form.module';

import { FormularioComponent } from './pages/formulario/formulario.component';
import { SolicitarTComponent } from './pages/solicitar-t/solicitar-t.component';
import { HomeComponent } from './pages/home/home.component';





@NgModule({
  declarations: [
    FormularioComponent,
    SolicitarTComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ConsultaFormModule
  ]
})
export class LudyWifiPassModule { }
