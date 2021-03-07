import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoService } from './services/empleado.service';
import { HttpClientModule } from "@angular/common/http";
//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerEmpleadosComponent } from './components/ver-empleados/ver-empleados.component';
import { AgregarEditarEmpleadoComponent } from './components/agregar-editar-empleado/agregar-editar-empleado.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VerEmpleadosComponent,
    AgregarEditarEmpleadoComponent,
    ListEmpleadosComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,






  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
