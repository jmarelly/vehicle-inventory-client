import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesDataService } from '../services/vehicles-data.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicleData: any;
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesDataService) { }

  ngOnInit(): void {
    const uuid = this.route.snapshot.params['uuid'];
    this.vehicleService.getVehicleId(uuid).subscribe((res: any) => {
      this.vehicleData = res.data[0];
    });
  }
}
