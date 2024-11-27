import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './componentes/lista/lista.component';
import { CrearComponent } from './componentes/crear/crear.component';
import { EditarComponent } from './componentes/editar/editar.component';


const routes: Routes = [
  {path:'', redirectTo:'lista', pathMatch:'full'},
  {path:'lista', component:ListaComponent},
  {path:'crear', component:CrearComponent},
  {path: 'editar/:id', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
