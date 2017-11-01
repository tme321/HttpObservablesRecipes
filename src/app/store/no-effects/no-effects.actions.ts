import { Action } from '@ngrx/store';
import { BasicDataResult } from '../../models/basic-data.interface';

export const NoEffectsActionTypes = {
    SetData: 'SetData',
}

export class SetData implements Action {
    readonly type = NoEffectsActionTypes.SetData;
    constructor(public payload: BasicDataResult[]) {}
}

export type NoEffectsActions = 
    SetData;
    