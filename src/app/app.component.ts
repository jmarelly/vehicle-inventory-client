import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {} 

  onVehiclesLocations(){
    this.router.navigate(['/vehicles-locations']);
  }

  onVehicles(){
    console.log('on vehicles')
    this.router.navigate(['/vehicles']);
  }

  onVehicleAdd(){
    this.router.navigate(['/vehicle/add'], {queryParams: {edit: false}});
  }
}
