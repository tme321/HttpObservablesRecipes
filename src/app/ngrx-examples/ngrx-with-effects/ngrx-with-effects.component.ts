import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { BasicDataResult } from '../../models/basic-data.interface';
import { AppStoreModel } from '../../store/app.model';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';
import { getEffectsData } from '../../store/effects/effects.reducer';
import { RequestData, SetData } from '../../store/effects/effects.actions';

/**
 * This example shows how to use ngrx effects by 
 * letting the store update itself.  Here we only
 * fire an action that has an effect tied to it. 
 * 
 * Inside this component there is no coorelation 
 * between the action dispatched and the new set 
 * of data directly.  Instead indirectly the effects
 * service will intercept the action and when it 
 * does the effect itself will initiate the http 
 * request and then set the data into the store.
 * 
 * Then the data will come down the selector into 
 * the data$ already registered for that slice of 
 * the store.
 */
@Component({
  selector: 'ngrx-with-effects',
  templateUrl: './ngrx-with-effects.component.html',
  styleUrls: ['./ngrx-with-effects.component.css']
})
export class NgrxWithEffectsComponent implements OnInit, OnDestroy {
  data$: Observable<BasicDataResult[]>;
  
  constructor(
    private store: Store<AppStoreModel>) { }

  ngOnInit() {
    /*
     * Reference the store selection to 
     * the controller member so it can 
     * be used with the async pipe in the
     * template.
     */
    this.data$ = this.store.select(getEffectsData);
  }


  ngOnDestroy(): void {
    /*
     * Just clear the old data set when the component
     * is left.
     */
    this.store.dispatch(new SetData([]));
  }


  /**
   * Here instead of initiating the http
   * request manually we fire an action 
   * that has an effect registered for it.
   * 
   * This action is a signal to the effect
   * and doesn't do any work itself.
   * 
   * The actual http request is done inside
   * the effects service.
   */
  requestData() {
    this.store.dispatch(new RequestData());
  }

}
