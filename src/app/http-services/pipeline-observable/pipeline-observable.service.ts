import { Injectable } from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BasicDataResponse } from '../../models/basic-data.interface';
import { share, flatMap } from 'rxjs/operators';

/**
 * This service will provide a stream of BasicDataResponses
 * through the responses$ field.  Internally this class will
 * take care of making sure the http get call is shared to 
 * minimize network traffic.
 * 
 * It will also provide a method to request another fetching
 * of the data with getdata.  This method optionally takes
 * in both a url and a query parameter object to show that 
 * subsequent requests could hit different end points or could
 * hit the same endpoint with different parameters.  
 * 
 * Of course in this particular design the responses are going 
 * to continue to come out of the same output observable, 
 * responses$, even if the url were changed so in most cases it
 * probably wouldn't make sense to change the url.  But I 
 * included it just to show how it could be done.
 */
@Injectable()
export class PipelineObservableService {

  /**
   * Load new http requests into the beginning of the pipeline
   * by adding another http.get.
   */
  private pipelineSubject: ReplaySubject<Observable<BasicDataResponse>> = new ReplaySubject();

  /**
   * Take the emissions of the pipeline of observables
   * and flatten them.  This transforms from an observable
   * of observables into the individual Observable<BasicDataResponse>
   * objects that were created by calling http.get.
   * 
   * More operators could be added here if desired but for this example
   * this is enough.
   */
  private pipeline$ = this.pipelineSubject
    .pipe(
      flatMap(r$=>r$));

  /**
   * This will be a stream of resonses that will emit a
   * new value each time getdata is called and the 
   * response returns.
   * 
   * The response$ stream as a getter isn't strictly necessary,
   * the pipeline variable itself could have been made public.
   * This is mostly a stylistic choice.
   */
  get responses$(): Observable<BasicDataResponse> {
    return this.pipeline$;    
  }

  constructor(private http: HttpClient) {  
  }

  /**
   * This function no longer directly returns
   * the observable data but instead initiates
   * a new request that the pipeline handles.
   * 
   * The results will be continuously emitted
   * from the responses$ observable.
   * 
   * Also, again we use the share operator so
   * individual subscribers to the result are 
   * not causing multiple network requests but
   * instead all work with the same response.
   */
  getdata(
    queryParams = new HttpParams(),
    url ='./assets/basic-data.json') {

      this.pipelineSubject.next(
        this.http.get<BasicDataResponse>(url, {params: queryParams})
        .pipe(
          share()));
  }
  
}
  