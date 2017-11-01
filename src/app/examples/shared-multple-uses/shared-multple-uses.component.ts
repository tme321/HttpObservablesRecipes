import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, share } from 'rxjs/operators';
import { BasicDataResult } from '../../models/basic-data.interface';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';

/**
 * This component is the same as MultipleUsesInTemplateSubscribingComponent
 * except that the problem of multiple network requests caused
 * by multiple subscribers is solved by using the share operator.
 */
@Component({
  selector: 'app-shared-multple-uses',
  templateUrl: './shared-multple-uses.component.html',
  styleUrls: ['./shared-multple-uses.component.css']
})
export class SharedMultpleUsesComponent implements OnInit {
  data$: Observable<BasicDataResult[]>;
  dataCount$: Observable<number>;
  
    constructor(private bareServ: BareObservableService) { }
  
    ngOnInit() {
      /**
       * Here we add the share operator to the http get observable.
       * This way every further use of the same observable will reuse
       * the same data and not cause another network request.
       */
      this.data$ = this.bareServ.getdata().pipe(
        map(data=>data.results),
        share());

      /**
       * Same as in MultipleUsesInTemplateSubscribingComponent
       * except since this.data$ is shared multiple network requests
       * will not fire.
       */
      this.dataCount$ = this.data$.pipe(
        map(data=>data.length));
    }
  
  }
  