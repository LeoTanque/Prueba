import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './componentes/editar/editar.component';
import { AsyncPipe, DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbNavModule,
    DecimalPipe,
    AsyncPipe

  ],
  providers: [
    provideClientHydration(),
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
