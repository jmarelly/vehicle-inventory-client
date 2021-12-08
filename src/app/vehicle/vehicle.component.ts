import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesDataService } from '../services/vehicles-data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehiclesData: any = [];
  errorFetching = false;
  selectedVehicleUuid: string = '';
  toLoad = false;

  constructor(private route: Router, private vehicleService: VehiclesDataService) { }

  ngOnInit(): void {
    this.toLoad = true;
    this.vehicleService.getAllVehicles().subscribe((res: any) => {
      this.toLoad = false;
      this.vehiclesData = res.data;
    }, (err) => {
      this.errorFetching = true;
    });
  }

  onDeleteVehicle(uuid: string){
    this.vehiclesData = this.vehiclesData.filter((vehicle: any) => vehicle.uuid !== uuid);
  }

  onSaveVehicle(obj:any){
    this.vehiclesData.forEach((vehicleObj: any , index: number) => {
      if(vehicleObj.uuid === obj.uuid){
        this.vehiclesData[index] = obj;
      }
    });
  }
}
