import { Injectable } from '@angular/core';
import { MOCKIPDATA} from '../mock-data/mock' ;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getUserUsageData(): any {
    return MOCKIPDATA;
  }
}
