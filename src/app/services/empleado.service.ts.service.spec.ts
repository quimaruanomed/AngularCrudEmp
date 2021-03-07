import { TestBed } from '@angular/core/testing';

import { Empleado.Service.TsService } from './empleado.service.ts.service';

describe('Empleado.Service.TsService', () => {
  let service: Empleado.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Empleado.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
