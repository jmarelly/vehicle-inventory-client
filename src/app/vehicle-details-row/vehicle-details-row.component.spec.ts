import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailsRowComponent } from './vehicle-details-row.component';

describe('VehicleDetailsRowComponent', () => {
  let component: VehicleDetailsRowComponent;
  let fixture: ComponentFixture<VehicleDetailsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleDetailsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
