import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';
import { RippleModule } from 'primeng/ripple';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common'
registerLocaleData ( localeEs );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule,
    RippleModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
