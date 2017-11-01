import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppStoreModel } from '../../store/app.model';
import { BasicDataResult } from '../../models/basic-data.interface';
import { getNoEffectsData } from '../../store/no-effects/no-effects.reducer';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';
import { SetData } from '../../store/no-effects/no-effects.actions';

/**
 * A simple example showing how to get 
 * a result from an http request on 
 * command and then dispatch an action
 * to the store.
 * 
 * Separately the data is selected from
 * the store and the async pipe is used
 * to attach its values to the template.
 */
@Component({
  selector: 'ngrx-simple',
  templateUrl: './ngrx-simple.component.html',
  styleUrls: ['./ngrx-simple.component.css']
})
export class NgrxSimpleComponent implements OnInit, OnDestroy {
  data$: Observable<BasicDataResult[]>;
  
  constructor(
    private store: Store<AppStoreModel>,
    private bareServ: BareObservableService) { }

  ngOnInit() {
    /*
     * Reference the store selection to 
     * the controller member so it can 
     * be used with the async pipe in the
     * template.
     */
    this.data$ = this.store.select(getNoEffectsData);
  }

  ngOnDestroy(): void {
    /*
     * Just clear the old data set when the component
     * is left.
     */
    this.store.dispatch(new SetData([]));
  }


  /**
   * This function is tied to the 
   * button click event and when
   * fired it subscribes to a new 
   * http get request and then 
   * maps that data to an action 
   * that is dispatched to the store.
   */
  getData() {
    this.bareServ.getdata()
    .pipe(
      map(data=>data.results))
    .subscribe(data=>{
      this.store.dispatch(new SetData(data));
    });
  }

}
