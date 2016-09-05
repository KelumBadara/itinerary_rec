import {Component} from '@angular/core';
import {Attraction} from './attraction';
import { AttractionService } from './attraction-supplier.service';


@Component({
  
  selector: 'itinerary-comp',
  
  template: `
<md-card >
  <md-tab-group>
    <md-tab>
      <template md-tab-label>Day By Day</template>
      <template md-tab-content>
          <md-grid-list cols="20" rowHeight="100px">
              <md-grid-tile colspan="2" rowspan="2"  style="border-right: 2px solid #00802b;">
                 <md-nav-list style="border-right: 5px solid #00802b;">
                    <a md-list-item href="..." >Day 1</a>
                     <md-divider></md-divider>
                    <a md-list-item >Day 2</a>
                     <md-divider></md-divider>
                    <a md-list-item href="..." >Day 3</a>
                     <md-divider></md-divider>
                 </md-nav-list>
           
              </md-grid-tile>
              <md-grid-tile colspan="18" rowspan="10" [style.background]="'lightblue'">
                  <md-card style="height:100% ; width:100%" >
                     <md-button-toggle-group multiple>
                        <md-button-toggle routerLink="/detail" md-tooltip="Detail View" tooltip-position="below"><md-icon>list</md-icon></md-button-toggle>
                        <md-button-toggle routerLink="/map" md-tooltip="Map View" tooltip-position="below"><md-icon>place</md-icon></md-button-toggle>
                        <md-button-toggle md-tooltip="Share" tooltip-position="below"><md-icon>share</md-icon></md-button-toggle>              
                      </md-button-toggle-group>
                       
                           <router-outlet> 
                           
                           </router-outlet>
                       
                   

                  </md-card>
              </md-grid-tile>

          </md-grid-list>
        
      </template>
    </md-tab>
    <md-tab>
      <template md-tab-label>Overview</template>
      <template md-tab-content>
        <h1>Some more tab content</h1>
        <p>...</p>
      </template>
    </md-tab>
  </md-tab-group>


</md-card>


  
  
  
  
  `,
  styles: [`#card:hover {

    height:200px !important;
    -webkit-transition: height ease 1s;
    -moz-transition: height ease 1s;
    -o-transition: height ease 1s;
    transition: height ease 1s;
}`],
   
  
})

export class ItineraryComponent{
    



}