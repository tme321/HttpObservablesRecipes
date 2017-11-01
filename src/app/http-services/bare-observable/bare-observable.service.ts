import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasicDataResponse } from '../../models/basic-data.interface';
import { Observable } from 'rxjs/Observable';

/**
 * Very simple service that just 
 * returns an observable that is
 * the result of an http.get call
 * and allows component controllers
 * to handle the observable however
 * they want to.
 */
@Injectable()
export class BareObservableService {

  constructor(private http: HttpClient) { }

  /**
   * Just return the observable.  The components will
   * take care of subscribing manually.
   */
  getdata(): Observable<BasicDataResponse> {
    return this.http.get<BasicDataResponse>('./assets/basic-data.json');
  }

}
