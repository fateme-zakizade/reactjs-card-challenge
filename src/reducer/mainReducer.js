import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    EDIT_DATA
  } from '../action/mainAction';
  import update from 'react-addons-update';
  
  const initialState = {
    items: [],
    loading: true,
    error: null
  };
  
  export default function cards(state = initialState, action) {
    console.log(action.payload)
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.data.cards
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };

        case  EDIT_DATA:
        return update(state, { 
          items: { 
            [action.payload.data.index]: {
              title: {$set: action.payload.data.title},
              description:{$set: action.payload.data.description}
            }
          }
        });
      default:
        return state;
    }
  }