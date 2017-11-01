import { Action, ActionReducer } from '@ngrx/store';
import { BasicDataResult } from '../models/basic-data.interface';
import { NoEffectsActions } from './no-effects/no-effects.actions';

export interface AppStoreModel {
    noEffects: BasicDataResult[];
    effects: BasicDataResult[];
}
