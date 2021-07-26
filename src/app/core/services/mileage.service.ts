import {Injectable} from '@angular/core';
import {LocationService} from './location.service';
import {from, of} from 'rxjs';
import {concatMap, reduce} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MileageService {

  constructor(
    private locationService: LocationService
  ) { }

  getDistanceInternal(fromLocation, toLocation) {
    return this.locationService.getDistance(fromLocation, toLocation);
  }

  getDistance(locations: any[] = []) {
    const chunks = [];

    for (let index = 0, len = locations.length - 1; index < len; index++) {
      const innerFrom = locations[index];
      const to = locations[index + 1];

      if (innerFrom && to && innerFrom.display && to.display && innerFrom.latitude && to.latitude && innerFrom.longitude && to.longitude) {
        chunks.push([innerFrom, to]);
      }
    }

    if (chunks.length === 0) {
      return of(null);
    } else {
      return from(chunks).pipe(
        concatMap(chunk => this.getDistanceInternal(chunk[0], chunk[1])),
        reduce((dist1, dist2) => dist1 + dist2)
      );
    }
  }
}
