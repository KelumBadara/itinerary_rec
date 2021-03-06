import {Component} from '@angular/core';
import {Attraction} from './attraction';
import { AttractionService } from './attraction-supplier.service';


@Component({
  
  selector: 'itinerary-detail-comp',
  
  template: ` 
  <md-grid-list cols="20" rowHeight="100px">
  
  <md-grid-tile id="#detailView" colspan="6" rowspan="6" style="border-right: 5px solid #00802b;">
        
        <md-grid-list cols="1" rowHeight="84px">
            <md-grid-tile colspan="1" rowspan="0.1"  >
            <div>
                <md-card style="width:300px ;height:20px; border-radius: 15px " [style.background]="'#47d147'">
                    <md-card-header>
                        <md-icon>today</md-icon>
                        <md-card-title>Day 1</md-card-title>
                    </md-card-header>
                </md-card>
            </div>
            </md-grid-tile>
            <md-grid-tile colspan="1" rowspan="2"  *ngFor="let attraction of attractions">

                        <div>
                            
                                <md-card id ="card" style="overflow:hidden;width:210px;height:95px ;border-radius: 15px;border: 1px solid #00802b; " >
                                    <md-card-header>
                                    
                                        <img md-card-avatar src={{attraction.image}}>

                                        
                                        <md-card-title>{{attraction.name}}</md-card-title>
                                        <md-card-subtitle>duration goes here</md-card-subtitle>
                                    </md-card-header>
                                        
                                    <md-card-actions>
                                        <button md-button (click)="onSelect(attraction)">View</button>
                                        <button md-button>Edit</button>
                                    </md-card-actions>
                                </md-card>
                                <md-card style="width:180px;border-left: 6px solid red;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVQImWP4yqz9n4EogFMlAL3QBEWuFPP4AAAAAElFTkSuQmCC) repeat;">

                                    <md-card-header>
                                    
                                        <md-icon style="float:left">directions_bus</md-icon>

                                        
                                        <md-card-title>{{attraction.name}}</md-card-title>
                                        <md-card-subtitle></md-card-subtitle>
                                    </md-card-header>

                                </md-card>   
                        </div>
            </md-grid-tile>
            
        </md-grid-list>
        
            
    
        
    

       </md-grid-tile>



        <md-grid-tile colspan="14" rowspan="6" [style.background]="'lightpink'">
            <attraction1 [attraction]="selectedAttraction"   style="width:100%; height:100%">
            </attraction1>
        </md-grid-tile>
    </md-grid-list>


    `,

    styles: [`#card:hover {

            height:200px !important;
            -webkit-transition: height ease 1s;
            -moz-transition: height ease 1s;
            -o-transition: height ease 1s;
            transition: height ease 1s;
   }`],

   providers: [AttractionService],




})

export class ItineraryDetailComponent{
     attractions: Attraction[]; 
     selectedAttraction:Attraction;
      
     constructor(private attractionService: AttractionService) { }
    
     getHeroes(): void {
        this.attractions = this.attractionService.getAttractions();
     }


      ngOnInit(): void {
        this.getHeroes();
      }

      

      onSelect(attraction:Attraction):void{
          this.selectedAttraction = attraction;
      }



}
