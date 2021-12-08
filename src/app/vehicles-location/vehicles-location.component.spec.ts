import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesLocationComponent } from './vehicles-location.component';

describe('VehiclesLocationComponent', () => {
  let component: VehiclesLocationComponent;
  let fixture: ComponentFixture<VehiclesLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
