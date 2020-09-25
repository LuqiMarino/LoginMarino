import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesRegionesComponent } from './paises-regiones.component';

describe('PaisesRegionesComponent', () => {
  let component: PaisesRegionesComponent;
  let fixture: ComponentFixture<PaisesRegionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesRegionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesRegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
