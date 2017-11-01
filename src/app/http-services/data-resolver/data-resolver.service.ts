import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { map, delay } from 'rxjs/operators';
import { BasicDataResult } from "../../models/basic-data.interface";
import { BareObservableService } from "../../http-services/bare-observable/bare-observable.service";

@Injectable()
export class DataResolverService implements Resolve<BasicDataResult[]> {
  constructor(private bareServ: BareObservableService) {}
 
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<BasicDataResult[]> {

    /*
     * Add a small delay to show that the route 
     * won't be loaded until the data resolves.
     */
    return this.bareServ.getdata().pipe(
      map(data=>data.results),
      delay(1500));
  }
}