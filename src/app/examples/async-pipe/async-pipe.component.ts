import { Component, OnInit } from '@angular/core';
import { BasicDataResponse, BasicDataResult } from '../../models/basic-data.interface';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';

/**
 * Simple component that uses the async pipe
 * to subscribe to the observable instead of
 * manually doing and tracking the subscription.
 * 
 * Otherwise it is basically the same as 
 * the ControllerSubscribingComponent implementation.
 */
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  data$: Observable<BasicDataResult[]>;

  constructor(private bareServ: BareObservableService) { }

  ngOnInit() {
    /**
     * Instead of subscribing to the data inside the controller
     * use a reference to the actual observable then use the
     * async pipe inside the controller to do the actual subscribing.
     * 
     * For simplicity we flatten the data structure here with a map
     * operation.
     */
    this.data$ = this.bareServ.getdata().pipe(
      map(data=>data.results));
  }

}
