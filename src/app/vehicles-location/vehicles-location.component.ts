import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { VehiclesDataService } from '../services/vehicles-data.service';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Marker } from 'mapbox-gl';

@Component({
  selector: 'app-vehicles-location',
  templateUrl: './vehicles-location.component.html',
  styleUrls: ['./vehicles-location.component.css'],
})
export class VehiclesLocationComponent implements OnInit {
  vehiclesData: any = [];
  defaultLat = 32.0879994;
  defaultLng = 34.7622266;
  map: Mapboxgl.Map | undefined;

  constructor(private vehicleService: VehiclesDataService) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles().subscribe((data) => {
      this.vehiclesData = data;
      (Mapboxgl as any).accessToken = environment.mapBoxToken;
      this.map = new Mapboxgl.Map({
        container: 'my-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.defaultLng, this.defaultLat], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
      this.vehiclesData.data.forEach((vehicle: any) => {
        const popup = new Mapboxgl.Popup({ offset: 25 }).setHTML(`
        <ul style="flex-wrap: wrap; width: 200px; list-style: none", overflow-wrap: break-word;>
          <li>Vehicle name: ${vehicle.name}</li>
          <li>Longtitude: ${vehicle.longtitude}</li>
          <li>Latitude: ${vehicle.latitude}</li>
        </ul>
        `);
        this.createMarker(vehicle.longtitude, vehicle.latitude, popup);
      });
    });
  }

  createMarker(lat: number, long: number, popup: Mapboxgl.Popup | null = null, draggable: boolean = false) {
    if (this.map) {
      const marker = new Mapboxgl.Marker({ draggable });
      marker.setLngLat([long, lat]);
      if (popup) {
        marker.setPopup(popup);
      }
      marker.addTo(this.map);
    }
  }
}
