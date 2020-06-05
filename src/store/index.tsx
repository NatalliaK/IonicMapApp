import { combineReducers } from 'redux';
import { mapReducer } from './LeafletMap/mapReducer';

export const rootReducer = combineReducers({
  leafletMapInitCoords: mapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
