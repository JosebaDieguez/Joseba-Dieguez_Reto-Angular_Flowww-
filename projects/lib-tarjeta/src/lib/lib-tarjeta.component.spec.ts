import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTarjetaComponent } from './lib-tarjeta.component';

describe('LibTarjetaComponent', () => {
  let component: LibTarjetaComponent;
  let fixture: ComponentFixture<LibTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibTarjetaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
