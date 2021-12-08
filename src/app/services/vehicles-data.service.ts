import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DOMAIN_API_VEHICLE, DOMAIN_API_VEHICLES} from '../paths/vehicle_inventory';

@Injectable({
  providedIn: 'root'
})
export class VehiclesDataService {

  constructor(private http: HttpClient) { }

  getAllVehicles(){
    return this.http.get(DOMAIN_API_VEHICLES);
  }

  getVehicleTypes(){
    return this.http.get(`${DOMAIN_API_VEHICLE}/types`);
  }

  getVehicleId(uuid: any){
    return this.http.get(`${DOMAIN_API_VEHICLE}/${uuid}`);
  }

  updateVehicle(uuid: string, reqData: any){
    return this.http.put(`${DOMAIN_API_VEHICLE}/${uuid}`, reqData);
  }

  addVehicle(reqData: any){
    return this.http.post(`${DOMAIN_API_VEHICLE}`, reqData);
  }

  deleteVehicle(uuid: string){
    return this.http.delete(`${DOMAIN_API_VEHICLE}/${uuid}`)
  }
}
