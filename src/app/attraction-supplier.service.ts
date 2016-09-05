import { Injectable } from '@angular/core';
import { Attraction } from './attraction';
import { ATTRACTIONS } from './mock-attractions';

@Injectable()
export class AttractionService {
  getAttractions(): Attraction[] {
    return ATTRACTIONS;
  }
}