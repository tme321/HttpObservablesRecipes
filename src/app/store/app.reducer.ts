import { Action, combineReducers, ActionReducerMap } from '@ngrx/store';
import { AppStoreModel } from './app.model';
import { noEffectsReducer } from './no-effects/no-effects.reducer';
import { effectsReducer } from './effects/effects.reducer';

export const appReducer: ActionReducerMap<AppStoreModel> = {
	noEffects: noEffectsReducer,
	effects: effectsReducer,
}
