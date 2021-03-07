import { Component, OnInit } from '@angular/core';
import { Iemploye } from 'src/app/interfaces/Iemploye';
import { EmpleadoService } from 'src/app/services/empleado.service';//Importante para que reconozca el servicio poner empleado.service
import { Observable } from "rxjs";



//import { HttpClientModule }  from '@angular/common/http';



@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  ListEmpleadosComponent : Iemploye[] = [];

  constructor(private _employeService: EmpleadoService) {}


  ngOnInit(): void {
    this.getEmploye();
  }

  getEmploye() {
    this._employeService.getListEmploye().subscribe(data => {
    this.ListEmpleadosComponent = data;
  }, error => {
     console.log(error);
  })
}
eliminarEmpleado(id: any){
  console.log(id);
  this._employeService.deleteEmploye(id).subscribe(data => {
     this.getEmploye();
   }, error => {
      console.log(error);
   })

  
}

}
