import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarEmpleadoComponent } from './components/agregar-editar-empleado/agregar-editar-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';

const routes: Routes = [
  { path: '', component : ListEmpleadosComponent },
  { path: 'agregar', component : AgregarEditarEmpleadoComponent },
  { path: 'editar/:id', component: AgregarEditarEmpleadoComponent },
  { path: 'ver/:id', component: VerEmpleadosComponent },
  { path: '**', redirectTo: '/', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
