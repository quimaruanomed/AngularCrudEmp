import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmpleadoService } from 'src/app/services/empleado.service';//Importante para que reconozca el servicio poner empleado.service
import { Observable } from "rxjs";
import { Iemploye } from 'src/app/interfaces/Iemploye';


@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.css']
})
export class VerEmpleadosComponent implements OnInit {

   id: number;
   employe: Iemploye | undefined;
   constructor(private aRoute: ActivatedRoute, private _employeService : EmpleadoService) {
     this.aRoute.snapshot.paramMap.get('id');
     this.id= +this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getEmploye();
  }
  getEmploye() {
    this._employeService.getEmploye(this.id).subscribe(data =>{
     this.employe = data;
    })

  }

}
