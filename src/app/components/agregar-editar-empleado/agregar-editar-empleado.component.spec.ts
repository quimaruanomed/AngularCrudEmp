import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarEmpleadoComponent } from './agregar-editar-empleado.component';

describe('AgregarEditarEmpleadoComponent', () => {
  let component: AgregarEditarEmpleadoComponent;
  let fixture: ComponentFixture<AgregarEditarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
