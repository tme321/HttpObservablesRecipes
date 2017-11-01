import { Action, ActionReducer } from '@ngrx/store';
import { EffectsActionTypes, EffectsActions, SetData } from './effects.actions';
import { BasicDataResult } from '../../models/basic-data.interface';
import { AppStoreModel } from '../app.model';

export function effectsReducer
    (state: BasicDataResult[] = [], action: EffectsActions) {
        switch(action.type) {
            case EffectsActionTypes.RequestData: {
                return state;
            }
            case EffectsActionTypes.SetData: {
                return (action as SetData).payload;
            }
            default: { 
                return state; 
            }
        }
    } 

export const getEffectsData = (state: AppStoreModel) => state.effects;