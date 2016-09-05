import {Component} from '@angular/core';
import {Attraction} from './attraction';
import { AttractionService } from './attraction-supplier.service';


@Component({
  
  selector: 'map-view-comp',
  
  template: ` <md-card style="border: 1px solid #00802b;">
            <iframe 
                        width="100%"
                        height="700px"
                        frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?key= AIzaSyD6rJv0BEtQqzezvJ8uhe15TK0s_K1m918 
                            &q=Space+Needle,Seattle+WA" allowfullscreen>

                            
            </iframe>
            </md-card>

    `,

    styles: [`
   `],

   providers: [AttractionService],




})

export class MapViewComponent{



}
