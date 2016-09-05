import {Component,Input } from '@angular/core';
//import { InfiniteScroll } from 'angular2-infinite-scroll';

import { Attraction} from './attraction';

@Component({
   selector: 'attraction1',
  
   
    styles: [
        `.search-results {
            height: 20rem;
            overflow: scroll;
        }
        .rating-static {
            width: 60px;
            height: 16px;
            display: block;
            background: url('http://www.itsalif.info/blogfiles/rating/star-rating.png') 0 0 no-repeat;
        }
        .rating-50 { background-position: 0 0; }
        .rating-40 { background-position: -12px 0; } 
        .rating-30 { background-position: -24px 0; }
        .rating-20 { background-position: -36px 0; }
        .rating-10 { background-position: -48px 0; }
        .rating-0 { background-position: -60px 0; }
        
        .rating-5  { background-position: -48px -16px; }
        .rating-15 { background-position: -36px -16px; }
        .rating-25 { background-position: -24px -16px; }
        .rating-35 { background-position: -12px -16px; }
        .rating-45 { background-position: 0 -16px; }
        
        
        
        
        
        
        
        `
    ],
  template: `  <md-card *ngIf="attraction" >
                                      <md-tab-group >
                                          <md-tab >
                                            <template md-tab-label>Overview</template>
                                            <template md-tab-content style="width:100%; height:100%">
                                            <md-grid-list cols="5" rowHeight="160px">
                                                <md-grid-tile colspan="2" rowspan="4" [style.background]="'lightblue'">
                                                    <md-card style="width:100%;height:100%">
                                                        <md-card-header>
                                                            <img md-card-avatar src="http://i64.tinypic.com/k11f7.jpg">
                                                            <md-card-title>{{attraction.name}}</md-card-title>
                                                            <md-card-subtitle>Header subtitle</md-card-subtitle>
                                                        </md-card-header>
                                                        <img md-card-image src="http://i64.tinypic.com/k11f7.jpg">
                                                        <md-card-content>
                                                          
                                                            <md-list>
                                                              
                                                              <md-subheader class="md-no-sticky">Contact details</md-subheader>
                                                              <md-list-item >
                                                                  <md-icon md-list-avatar>location_on</md-icon>
                                                                  <h4 md-line>Address</h4>
                                                                  <p md-line class="demo-2"> {{attraction.address}} </p>
                                                              </md-list-item>
                                                              <md-divider></md-divider>
                                                              <md-list-item >
                                                                  <md-icon md-list-avatar>phone</md-icon>
                                                                  <h4 md-line>Phone Number</h4>
                                                                  <p md-line class="demo-2"> {{attraction.phone}} </p>
                                                              </md-list-item>
                                                                
                                                    
                                                          
                                                            </md-list>

                                                        </md-card-content>
                                                        
                                                        <md-card-actions>
                                                            <button md-raised-button color="primary">LIKE</button>
                                                            <button md-raised-button color="warn">BEEN</button>
                                                      </md-card-actions>
                                                    </md-card>
                                                </md-grid-tile>
                                              <md-grid-tile colspan="3" rowspan="4" [style.background]="'lightblue'">
                                                  <md-card style="width:100%;height:100%">
                                                        <md-card-content>
                                                          
                                                            <md-list>
                                                          
                                                              <md-list-item >
                                                                  <md-icon md-list-avatar>link</md-icon>
                                                                  <h4 md-line>On Web</h4>
                                                                  <p md-line class="demo-2"> www.thisattraction.com </p>
                                                              </md-list-item>
                                                              <md-divider></md-divider>
                                                              <md-list-item >
                                                                  <md-icon md-list-avatar>star_rate</md-icon>
                                                                  <h4 md-line>Rating</h4>
                                                                   <p md-line class="demo-2"> <span class="rating-static rating-{{attraction.rating}}"></span></p>
                                                              </md-list-item>
                                                              <md-divider></md-divider>
                                                              <md-list-item >
                                                                  <md-icon md-list-avatar>star_rate</md-icon>
                                                                  <h4 md-line>Description</h4>
                                                                  <p md-line class="demo-2"></p>

                                                                  
                                                              </md-list-item>
                                                              <p> {{attraction.description}}</p>
                                                            </md-list>
                                                            <md-divider></md-divider>

                                                        </md-card-content>
                                                        
                                                        
                                                    </md-card>

                                                </md-grid-tile>
                                                
                                              
                                            </md-grid-list>

                                                
                                            </template>
                                          </md-tab>
                                          <md-tab>
                                            <template md-tab-label>Near By Alternatives</template>
                                            <template md-tab-content>
                                              <h1>Some more tab content</h1>
                                                    <iframe
                                                                width="600"
                                                                height="450"
                                                                frameborder="0" style="border:0"
                                                                src="https://www.google.com/maps/embed/v1/place?key= AIzaSyD6rJv0BEtQqzezvJ8uhe15TK0s_K1m918 
                                                                    &q=Space+Needle,Seattle+WA" allowfullscreen>

                                                                    
                                                    </iframe>
                                            </template>
                                          </md-tab>
                                        </md-tab-group>

 
                                  </md-card>`,
  
})
export class AttractionComponent {
   @Input()
   attraction: Attraction;
}
