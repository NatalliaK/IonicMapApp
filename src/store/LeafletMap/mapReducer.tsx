import { INIT_COORD, typedAction } from './mapTypes';

export interface CoordType {
  initCoords: number[];
}

const initCoords = [52, 104];

const initState: CoordType = { initCoords: [] };

export const getInitCoords = () => {
  return typedAction(INIT_COORD, initCoords);
};

type CoordAction = ReturnType<typeof getInitCoords>;

export function mapReducer(state = initState, action: CoordAction): CoordType {
  switch (action.type) {
    case INIT_COORD:
      return {
        ...state,
        initCoords: action.payload,
      };
    default:
      return state;
  }
}
