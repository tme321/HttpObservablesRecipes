import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, mergeMap } from 'rxjs/operators';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { BasicDataResponse } from '../../models/basic-data.interface';
import { EffectsActionTypes, SetData } from '../../store/effects/effects.actions';

/**
 * An effect that listens for the RequestData action 
 * and when it sees that action it will initiate an 
 * http get request and then set the data into the 
 * correct location of the store by using the SetData
 * action.
 * 
 * This pattern disassociates the component completely 
 * from the model, the store, so that the component no
 * longer has to be aware of http requests or any other
 * details of that fashion.
 */
@Injectable()
export class DataEffect {
    @Effect() requestData$: Observable<Action> = 
        this.actions$
        .ofType(EffectsActionTypes.RequestData)
        .pipe(
            mergeMap(action=>
                this.httpClient
                .get<BasicDataResponse>('./assets/basic-data.json')
                .pipe(
                    map(data=>new SetData(data.results)))));

    constructor(
        private httpClient: HttpClient,
        private actions$: Actions) {}      
}