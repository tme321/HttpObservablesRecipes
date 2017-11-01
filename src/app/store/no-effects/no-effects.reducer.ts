import { Action, ActionReducer } from '@ngrx/store';
import { NoEffectsActionTypes, NoEffectsActions } from './no-effects.actions';
import { BasicDataResult } from '../../models/basic-data.interface';
import { AppStoreModel } from '../app.model';

export function noEffectsReducer
    (state: BasicDataResult[] = [], action: NoEffectsActions) {
        switch(action.type) {
            case NoEffectsActionTypes.SetData: {
                return action.payload;
            }
            default: { 
                return state; 
            }
        }
    }

export const getNoEffectsData = (state: AppStoreModel) => state.noEffects;