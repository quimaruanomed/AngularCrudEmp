import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Iemploye } from 'src/app/interfaces/Iemploye';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-editar-empleado',
  templateUrl: './agregar-editar-empleado.component.html',
  styleUrls: ['./agregar-editar-empleado.component.css']
})
export class AgregarEditarEmpleadoComponent implements OnInit {

  AgregarEmpleado: FormGroup;
  action= 'Agregar';
  id= 0;
  employe: Iemploye | undefined;

  constructor(private fb: FormBuilder,
       private _employeService: EmpleadoService,
       private router: Router,
       private aRoute: ActivatedRoute) {
      this.AgregarEmpleado = this.fb.group({
        fnameS: ['', Validators.required],
          position: ['', Validators.required],
            salary: ['', Validators.required]
      })
      this.id = +this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.esEditar();
  }
esEditar(){
   if(this.id !== 0){
     this.action = 'Editar';
     this._employeService.getEmploye(this.id).subscribe(data => {
       console.log(data);
       this.employe = data;
       this.AgregarEmpleado.patchValue({
         fnameS: data.fnameS,
         position: data.position,
         salary: data.salary
       })
     }, error => {
        console.log(error);
     })
   }
}

  agregarEditarEmpleado(){
    if(this.employe == undefined){

//Añadimos un nuevo empleado


    const empleado: Iemploye = {

      fnameS: this.AgregarEmpleado.get('fnameS')?.value,
      position: this.AgregarEmpleado.get('position')?.value,
      salary: this.AgregarEmpleado.get('salary')?.value
    }
    this._employeService.saveEmploye(empleado).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
       console.log(error);

    })

    console.log(empleado);
  }else{
    //Editamos datos del Empleado
    const empleado: Iemploye = {
      id: this.employe.id,
      fnameS: this.AgregarEmpleado.get('fnameS')?.value,
      position: this.AgregarEmpleado.get('position')?.value,
      salary: this.AgregarEmpleado.get('salary')?.value
    }
    this._employeService.updateEmploye(this.id, empleado).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);

    })
  }


  }
  }
