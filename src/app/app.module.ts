import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehiclesLocationComponent } from './vehicles-location/vehicles-location.component';
import { VehicleDetailsRowComponent } from './vehicle-details-row/vehicle-details-row.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';

const appRoutes: Routes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicle/add', component: AddVehicleComponent },
  { path: 'vehicle-details/:uuid', component: VehicleDetailsComponent },
  { path: 'vehicle/edit/:uuid', component: VehicleDetailsComponent },
  { path: 'vehicles-locations', component: VehiclesLocationComponent },
  { path: 'not-found', component: NotFoundComponent},
  { path: '', redirectTo: '/vehicles', pathMatch: 'full'},
  { path: '**', redirectTo: '/not-found'},
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    VehicleDetailsComponent,
    VehiclesLocationComponent,
    VehicleDetailsRowComponent,
    AddVehicleComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  imports: [
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
