import { SET_MARGIN } from '../actions/types';

const initialState = {
    margin: 297
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case SET_MARGIN:
        return {
          margin: action.payload
        };
      default:
        return state;
    }
  }