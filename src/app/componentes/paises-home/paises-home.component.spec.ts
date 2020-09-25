import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesHomeComponent } from './paises-home.component';

describe('PaisesHomeComponent', () => {
  let component: PaisesHomeComponent;
  let fixture: ComponentFixture<PaisesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
