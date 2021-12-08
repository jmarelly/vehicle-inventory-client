import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesDataService } from '../services/vehicles-data.service';
import { DateFormatters } from '../utils/date-formatters';

@Component({
  selector: '[app-vehicle-details-row]',
  templateUrl: './vehicle-details-row.component.html',
  styleUrls: ['./vehicle-details-row.component.css'],
})
export class VehicleDetailsRowComponent implements OnInit {
  @Input() vehicleData: any;
  @Input() index: any;
  @Output() uuidEvent = new EventEmitter();
  @Output() newVehicleEvent = new EventEmitter();

  successMessage = '';
  errorMessage= '';
  currentSelectType: string = '';
  isEditMode = false;
  vehicleTypes: any = [];
  vehicleName = new FormControl('', [Validators.required]);
  longtitude = new FormControl('', [Validators.required]);
  latitude = new FormControl('', [Validators.required]);
  selectedType = new FormControl('', [Validators.required]);
  lastSuccessfulConnection = new FormControl(DateFormatters.format(new Date(), 'T'), [Validators.required])

  constructor(private vehicleService: VehiclesDataService, private router: Router) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleTypes().subscribe((vehicleTypes: any) => {
      this.vehicleTypes = vehicleTypes.data;
    });
    
    this.vehicleName.setValue(this.vehicleData.name);
      this.longtitude.setValue(this.vehicleData.longtitude);
      this.latitude.setValue(this.vehicleData.latitude);
      this.lastSuccessfulConnection.setValue(DateFormatters.format(new Date(this.vehicleData.last_successful_connection), 'T'));
      this.currentSelectType = this.vehicleData.type;

    this.selectedType.valueChanges.subscribe((data: string) => {
      this.currentSelectType = data;
    });
  }

  onEdit() {
    this.isEditMode = !this.isEditMode;
  }

  onClose(){
    this.isEditMode = !this.isEditMode;
  }

  onSave(uuid: string){
    const reqObj = {
      uuid: uuid,
      name: this.vehicleName.value,
      latitude: this.latitude.value,
      longtitude: this.longtitude.value,
      type: this.currentSelectType,
      last_successful_connection: DateFormatters.format(this.lastSuccessfulConnection.value)
    }
    if(!this.isFormValid()){
      this.errorMessage = 'Invalid Forms All Fields Are Required!';
      return;
    }
    this.vehicleService.updateVehicle(uuid, reqObj).subscribe(
      (res) => {
        this.successMessage = 'Vehicle Updated Successfuly!';
        
        setTimeout(() =>{
          this.successMessage = '';
          this.isEditMode = false;
          this.newVehicleEvent.emit(reqObj);
        }, 1000);
      }, 
      (err) => {
        this.errorMessage = 'Vehicle Failed To Update!';
      }
      );
  }

  onMoreDetails(uuid: string){
    this.router.navigate([`/vehicle-details/${uuid}`])
  }

  onDelete(uuid: string) {
    this.vehicleService.deleteVehicle(uuid).subscribe(
      (res) => {
        this.uuidEvent.emit(uuid);
        this.isEditMode = false;
        this.successMessage = 'Vehicle Deleted Successfuly!';
        setTimeout(() =>{
          this.successMessage = '';
        }, 1000);
      }, 
      (err) => {
        this.errorMessage = "Couldn't Deleted Vehicle!";
      }
      );
  }

  isFormValid(){
    if(!this.vehicleName.valid || !this.longtitude.valid || !this.latitude.valid || !this.currentSelectType){
      return false;
    }
    return true
  }
}
