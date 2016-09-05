import {Component,Input } from '@angular/core';
//import { InfiniteScroll } from 'angular2-infinite-scroll';

import { Attraction} from './attraction';

@Component({
   selector: 'my-itinaries',
  
   
    styles: [`@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro|Oswald);

/****************************************/
/* Styling rules, such as font and colors */
.date-as-calendar {
  font-variant: normal;
  font-style: normal;
  font-weight: normal;
  font-family: "Helvetica", "Arial", sans-serif;

  /* It seems vertical-align: baseline does not work correctly with display: inline-flex. */
  vertical-align: top;

  /* margin: 1ex; */

  color: black;
  background: white;
  background : linear-gradient(to bottom right, #FFF 0%, #EEE 100%);

  border: 1px solid #888;
  border-radius: 3px;
  overflow: hidden;

  box-shadow: 2px 2px 2px -2px black;
}
.date-as-calendar .weekday,
.date-as-calendar .day,
.date-as-calendar .month,
.date-as-calendar .year {
  text-align: center;
  line-height: 1.0;
}
.date-as-calendar .month {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  background: #B11;
  background : linear-gradient(to bottom right, #D66 0%, #A00 100%);
  color: white;
}

/****************************************/
/* Layout rules using position: absolute and pixels. */
.position-pixels.date-as-calendar {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.position-pixels.date-as-calendar .weekday,
.position-pixels.date-as-calendar .day,
.position-pixels.date-as-calendar .month,
.position-pixels.date-as-calendar .year {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 1em;
}
.position-pixels.date-as-calendar .month {
  top: 0px;
  font-size: 12px;
  padding: 2px 0;
}
.position-pixels.date-as-calendar .weekday {
  top: 16px;
  font-size: 10px;
}
.position-pixels.date-as-calendar .day {
  top: 26px;
  font-size: 24px;
}
.position-pixels.date-as-calendar .year {
  top: 50px;
  font-size: 14px;
}

/****************************************/
/* Layout rules using position: absolute and relative dimensions using em. */
.position-em.date-as-calendar {
  display: inline-block;
  position: relative;
  
  width: 4em; 
  height: 4em; 
}
.position-em.date-as-calendar .weekday,
.position-em.date-as-calendar .day,
.position-em.date-as-calendar .month,
.position-em.date-as-calendar .year {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 1em;
}
.position-em.date-as-calendar .month {
  top: 0px;
  font-size: 0.75em;
  padding: 0.1em 0;
}
.position-em.date-as-calendar .weekday {
  top: 1.6em;
  font-size: 0.6125em;
}
.position-em.date-as-calendar .day {
  top: 1.1em;
  font-size: 1.5em
}
.position-em.date-as-calendar .year {
  bottom: 0px;
  font-size: 0.87750em;
}

/****************************************/
/* Layout rules using display: inline-flex and relative dimensions using em. */
.inline-flex.date-as-calendar {
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  
  width: 4em; 
  height: 4em; 
}
.inline-flex.date-as-calendar .weekday,
.inline-flex.date-as-calendar .day,
.inline-flex.date-as-calendar .month,
.inline-flex.date-as-calendar .year {
  display: block;
  flex: 1 1 auto;
}
.inline-flex.date-as-calendar .month {
  order: 1;
  font-size: 0.75em;
  padding: 0.1em 0;
}
.inline-flex.date-as-calendar .weekday {
  order: 2;
  font-size: 0.6125em;
}
.inline-flex.date-as-calendar .day {
  order: 3;
  font-size: 1.5em;
}
.inline-flex.date-as-calendar .year {
  order: 4;
  font-size: 0.87750em;
}

/****************************************/
/* Multiple sizes. */
.date-as-calendar.size0_5x {
  font-size: 8px;
}
.date-as-calendar.size0_75x {
  font-size: 12px;
}
.date-as-calendar.size1x {
  font-size: 16px;
}
.date-as-calendar.size1_25x {
  font-size: 20px;
}
.date-as-calendar.size1_5x {
  font-size: 24px;
}
.date-as-calendar.size1_75x {
  font-size: 28px;
}
.date-as-calendar.size2x {
  font-size: 32px;
}
.date-as-calendar.size3x {
  font-size: 48px;
}

.md-whiteframe {
  background: #fff;
  margin: 30px;
  height: 100px;
}
@media screen and (max-width: 599px) {
  md-whiteframe {
    margin: 7px;
    height: 50px;
    background-color: #c8e4fa;
  }
  md-whiteframe > span {
    font-size: 0.4em;
  }
}
@media screen and (min-width: 600px) and (max-width: 959px) {
  md-whiteframe {
    margin: 20px;
    height: 75px;
  }
  md-whiteframe > span {
    font-size: 0.6em;
  }
}
@media screen and (min-width: 960px) and (max-width: 1199px) {
  md-whiteframe {
    margin: 20px;
    height: 90px;
    background-color: #fcddde;
  }
  md-whiteframe > span {
    font-size: 0.9em;
  }
}
@media screen and (min-width: 1200px) {
  md-whiteframe {
    margin: 25px;
    height: 100px;
    background-color: #F2FCE2;
  }
  md-whiteframe > span {
    font-size: 1.0em;
  }
}


















`],
    template: ` <md-grid-list cols="5" rowHeight="160px">
                    <md-grid-tile colspan="3" rowspan="4" [style.background]="'lightblue'"> 
                          

                            <div layout="row" layout-padding layout-wrap layout-fill style="padding-bottom: 32px;" ng-cloak>
                            <md-whiteframe class="md-whiteframe-1dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-1dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-2dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-2dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-3dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-3dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-4dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-4dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-5dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-5dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-6dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-6dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-7dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-7dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-8dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-8dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-9dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-9dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-10dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-10dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-11dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-11dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-12dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-12dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-13dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-13dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-14dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-14dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-15dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-15dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-16dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-16dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-17dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-17dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-18dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-18dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-19dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-19dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-20dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-20dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-21dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-21dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-22dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-22dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-23dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-23dp</span>
                            </md-whiteframe>
                            <md-whiteframe class="md-whiteframe-24dp" flex-sm="45" flex-gt-sm="35" flex-gt-md="25" layout
                                            layout-align="center center">
                                <span>.md-whiteframe-24dp</span>
                            </md-whiteframe>
                            </div>


                    </md-grid-tile>
                    <md-grid-tile colspan="2" rowspan="4" [style.background]="'lightpink'" style="border-left: 2px solid #00802b;"> 

                            <md-card style="width:90%;height:90%">
                        
                                <img md-card-image src="http://i64.tinypic.com/k11f7.jpg">
                                <md-card-content>
                                    <md-card-title>My Italy trip</md-card-title>
                                    
                                </md-card-content>
                                <md-card-content>
                                   
                                    <p>From</p>
                                   <time datetime="2014-09-24" class="date-as-calendar position-pixels">
                                    <span class="weekday">Wednesday</span>
                                    <span class="day">24</span>
                                    <span class="month">September</span>
                                    <span class="year">2014</span>
                                    </time>
                                     <p>To</p>
                                    <time datetime="2014-09-24" class="date-as-calendar inline-flex size1x">
                                    <span class="weekday">Wednesday</span>
                                    <span class="day">24</span>
                                    <span class="month">September</span>
                                    <span class="year">2014</span>
                                    </time>
                                </md-card-content>
                                
                                <md-card-footer>
                                 <md-card-actions style="float:bottom">
                                        <button md-button>View</button>
                                        <button md-button>Share</button>
                                </md-card-actions>
                            </md-card-footer>
                            </md-card>
                    </md-grid-tile>
                 </md-grid-list> 
                    
                    `,
  
})
export class MyItinerariesComponent {
   @Input()
   attraction: Attraction;
}
