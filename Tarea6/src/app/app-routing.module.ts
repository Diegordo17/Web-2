import { NgModule } from '@angular/core';
import { NavComponent } from './layouts/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'educacion', component:EducacionComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'cursos', component:CursosComponent},
  {path: 'contacto', component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
