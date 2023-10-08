import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { DestinoComponent } from './destino/destino.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

export const routes: Routes = [
  {path:'', redirectTo:'extrato', pathMatch:'full' },
  {path:'extrato', component:ExtratoComponent },
  {path:'transferencia', component:NovaTransferenciaComponent },
  {path:'destino', component:DestinoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
