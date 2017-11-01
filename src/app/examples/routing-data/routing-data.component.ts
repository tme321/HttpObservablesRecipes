import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { BasicDataResult } from '../../models/basic-data.interface';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * This example shows how to fetch the data
 * during a routing change before the component
 * is rendered.  The DataResolverService is attached
 * to the route as resolve data and the http request
 * is resolved before the component is allowed to load.
 * 
 * A small delay was added to the http request to show
 * how the component doesn't load until the data is ready.
 */
@Component({
  selector: 'routing-data',
  templateUrl: './routing-data.component.html',
  styleUrls: ['./routing-data.component.css']
})
export class RoutingDataComponent implements OnInit {
  data$: Observable<BasicDataResult[]>;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
     * Here the route data is defined by the shape in
     * the route's resolve data, resolve: { data: DataResolverService }, 
     * so we use a simple map operation to retreive it from the 
     * resolve data observable and set it to the data$ 
     * bound to the template.
     */
    this.data$ = this.route.data.pipe(
      map(routeData=>routeData.data));
  }
  
}
  