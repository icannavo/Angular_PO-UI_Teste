import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import  localePt  from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { DestinoComponent } from './destino/destino.component';



registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    DestinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'pt'
    },{
      provide:DEFAULT_CURRENCY_CODE,
      useValue:'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
