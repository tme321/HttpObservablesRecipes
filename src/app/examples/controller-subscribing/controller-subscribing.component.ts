import { Component, OnInit } from '@angular/core';
import { BasicDataResponse, BasicDataResult } from '../../models/basic-data.interface';
import { Subscription } from 'rxjs/Subscription';
import { BareObservableService } from '../../http-services/bare-observable/bare-observable.service';

/**
 * This is the most basic use of an observable.
 * The observable will be fetched from a service
 * and then manually subscribed to by the controller.
 * 
 * The result will be manually set to the controller's
 * public member data and data will then be bound to
 * the template as desired.
 * 
 * Since the controller is doing the subscribing manually
 * it must also track the subscription and unsubscribe when
 * it is done using it otherwise garbage collection won't 
 * be able to free up the resources used by the observables.
 */
@Component({
  selector: 'app-controller-subscribing',
  templateUrl: './controller-subscribing.component.html',
  styleUrls: ['./controller-subscribing.component.css']
})
export class ControllerSubscribingComponent implements OnInit {
  /**
   * Default the data that will be bound to the template
   * to an initial value.  Here an empty object is 
   * necessary for how the data is used.
   */
  data: BasicDataResult[] = [];

  /**
   * Since the controller itself is doing the subscribing
   * we have to track the subscrition and unsubscribe when
   * we are done with the observable.
   */
  dataSubscription: Subscription;

  constructor(private bareServ: BareObservableService) { }

  ngOnInit() {
    /*
     * Get the data here and set it to the local version
     * data being null must be handled either by defaulting
     * it to an initial value as done here or with null checks
     * in the template like *ngIf="data"
     */
    this.dataSubscription = 
      this.bareServ.getdata().subscribe(data=>this.data=data.results);
  }

  ngOnDestroy() {
    if(!this.dataSubscription.closed) {
      this.dataSubscription.unsubscribe();
    }
  }

}
