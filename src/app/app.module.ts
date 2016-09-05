/**
 * Created by dulanjaya on 8/31/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdIconModule} from '@angular2-material/icon';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdListModule } from '@angular2-material/list';
import{MdMenuModule} from '@angular2-material/menu';
import{MdTabsModule} from '@angular2-material/tabs';
import{MdTooltipModule} from '@angular2-material/tooltip';
import{MdButtonToggleModule} from '@angular2-material/button-toggle';
import{MdInputModule} from '@angular2-material/input';

import {AppComponent}  from './app.component';
import {AttractionComponent}  from './attraction.component';
import {ItineraryComponent}  from './itinerary.component';
import {ItineraryDetailComponent}  from './itinerary-detail-view.component';
import {MyItinerariesComponent}  from './my-itineraries.component';
import {MapViewComponent}  from './map-view.component';
import {AppSeason}  from './season.component';
import {AppCreateItinerary}  from './createItinerary.component';
import {AppPopup}  from './popup.component';
import {HomeComponent}  from './home.component';

import { routing ,appRoutingProviders } from './app.routing';



@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule,
    MdCardModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdListModule,
    MdMenuModule,
    MdTabsModule,
    MdTooltipModule,
    MdButtonToggleModule,
    routing,
    MdInputModule
    

  ],
  declarations: [AppComponent,AttractionComponent,ItineraryComponent,ItineraryDetailComponent,MapViewComponent,MyItinerariesComponent,AppSeason,AppCreateItinerary,AppPopup,HomeComponent],
  bootstrap: [AppComponent],
  providers: [
    appRoutingProviders
  ],
})
export class AppModule {
  
}
