import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';
import { BasicDataResult } from '../../models/basic-data.interface';
import { PipelineObservableService } from '../../http-services/pipeline-observable/pipeline-observable.service';


/**
 * This implementation uses a stream of BasicDataResponses
 * provided by the PipelineObservableService as it's data 
 * sources and can trigger another fetch of data by calling
 * the getdata method on the pipeline service.
 * 
 * The method for fetching another set of data is used as 
 * the callback for the click event of the button.
 */
@Component({
  selector: 'app-pipeline-requests',
  templateUrl: './pipeline-requests.component.html',
  styleUrls: ['./pipeline-requests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PipelineRequestsComponent implements OnInit {
  /**
   * hold the number of times the data 
   * was fetched.
   */
  private refreshCount = 0;

  /**
   * A stream of the times the data
   * was fetched.  Needed since change detection
   * is set to onPush
   */
  refreshCount$ = new BehaviorSubject<number>(this.refreshCount);
  
  /**
   * Connected to the services pipeline of responses
   * and then mapped to the results field inside the
   * responses.
   */
  data$: Observable<BasicDataResult[]>;

  /**
   * Connected to the data$ and then mapped 
   * to the length of the results array.
   */
  dataCount$: Observable<number>;

  constructor(private pipelineServ: PipelineObservableService) { }

  /**
   * Set up the streams that are subscribed to 
   * in the template with the async pipe.
   */
  ngOnInit() {
    this.data$ = this.pipelineServ.responses$.pipe(
      map(response=>response.results));
    this.dataCount$ = this.data$.pipe(
      map(d=>d.length));
  }

  /**
   * Whenever this method is invoked
   * a new set of data will be fetched
   * and then emitted from the pipeline.
   */
  getDataAgain() {
    this.pipelineServ.getdata();
    // also increment the refresh count
    this.refreshCount$.next(++this.refreshCount);
  }

}
