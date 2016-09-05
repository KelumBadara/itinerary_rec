import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapViewComponent} from './map-view.component';
import {ItineraryDetailComponent} from './itinerary-detail-view.component';
import {MyItinerariesComponent} from './my-itineraries.component';
import {ItineraryComponent} from './itinerary.component';
import {HomeComponent} from './home.component';

const appRoutes: Routes = [
  {
    path: 'map',
    component: MapViewComponent
  },
  {
    path: 'detail',
    component: ItineraryDetailComponent
  },

  {
    path: 'my-itinerary',
    component: MyItinerariesComponent
  },
  
  {
    path: 'itinerary',
    component: ItineraryComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const appRoutingProviders: any[] = [

];