import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { BasicDataResult } from '../../models/basic-data.interface';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';

/**
 * This component uses the same observable to get 2 pieces
 * of information it uses in its template.  However this 
 * implementation has a problem in that since there are
 * two subscriptions created, one for each observable,
 * the data will actually be fetched twice.  This problem
 * will be fixed in the SharedMultpleUsesSubscriberComponent
 * so that network requests are not on a per subscription
 * basis.
 */
@Component({
  selector: 'app-multiple-uses',
  templateUrl: './multiple-uses-in-template.component.html',
  styleUrls: ['./multiple-uses-in-template.component.css']
})
export class MultipleUsesInTemplateComponent implements OnInit {
  data$: Observable<BasicDataResult[]>;
  dataCount$: Observable<number>;
  
    constructor(private bareServ: BareObservableService) { }
  
    ngOnInit() {
      /**
       * Same as the normal async pipe use
       */
      this.data$ = this.bareServ.getdata().pipe(
        map(data=>data.results));

      /**
       * Here we have another use for the same data so 
       * take the data$ observable and add an operator to
       * the end to do something else with the data.
       * 
       * But the problem is that since dataCount$ is subscribed 
       * to with the async pipe as well it actually causes a 
       * second http request.  This works, but is accidently 
       * doubling the traffic.
       */
      this.dataCount$ = this.data$.pipe(
        map(data=>data.length));
    }
  
  }
  