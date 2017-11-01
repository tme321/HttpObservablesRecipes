import { Action } from '@ngrx/store';
import { BasicDataResult } from '../../models/basic-data.interface';

export const EffectsActionTypes = {
    RequestData: '[Effects]RequestData',
    SetData: '[Effects]SetData'
}

export class RequestData implements Action {
    readonly type = EffectsActionTypes.RequestData;
}

export class SetData implements Action {
    readonly type = EffectsActionTypes.SetData;
    constructor(public payload:BasicDataResult[]){}
}

export type EffectsActions = 
    RequestData |
    SetData;
