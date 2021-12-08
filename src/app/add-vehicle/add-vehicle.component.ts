import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehiclesDataService } from '../services/vehicles-data.service';
import { DateFormatters } from '../utils/date-formatters';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  vehicleTypes: any = [];
  successMessage = '';
  errorMessage= '';
  vehicleAddForm = new FormGroup({
    vehicleName: new FormControl('', [Validators.required]),
    selectedType: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longtitude: new FormControl('', [Validators.required]),
    lastSuccessfulConnection: new FormControl(DateFormatters.format(new Date(), 'T'), [Validators.required])
  })

  constructor(private vehicleService: VehiclesDataService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicleTypes().subscribe((res: any) => {
      this.vehicleTypes = res.data;
    })
  }

  onAddVehicle(){
    this.errorMessage = '';
    if(this.vehicleAddForm.invalid){
      this.errorMessage = 'Form Is Invalid';
      return;
    }
    const reqObj = {
      name: this.vehicleAddForm.get('vehicleName')?.value,
      type: this.vehicleAddForm.get('selectedType')?.value,
      latitude: this.vehicleAddForm.get('latitude')?.value,
      longtitude: this.vehicleAddForm.get('longtitude')?.value,
      last_successful_connection: DateFormatters.format(this.vehicleAddForm.get('lastSuccessfulConnection')?.value)
    }
    this.vehicleService.addVehicle(reqObj).subscribe(
      (res) => {
        this.successMessage = 'Vehicle Added Successfuly!';
        setTimeout(() =>{this.successMessage = ''}, 2000)
      }, 
      (err) => {
        this.errorMessage = 'Error On Adding Vehicle'
      }
      );
  }
}
