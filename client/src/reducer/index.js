import { FETCHING_COLORS_START, FETCHING_COLORS_SUCCESS, FETCHING_COLORS_FAILURE, PUT_COLORS_START, PUT_COLORS_SUCCESS, PUT_COLORS_FAILURE, POSTED_COLORS_START, POSTED_COLORS_SUCCESS, POSTED_COLORS_FAILURE, DELETE_COLORS_START, DELETE_COLORS_SUCCESS, DELETE_COLORS_FAILURE  } from '../actions/index';




  const initialState = {
    colors:[],
    error: '',
    fetchingColors: false,//initial fetch
    puttingColors: false,//updating
    postingColors: false,//adding
    deletingColors: false//delete
  };
  

  export const reducer = (state = initialState, action) => {
      switch(action.type){
          case 'FETCHING_COLORS_START':
          return {
              ...state,
              error: '',
            fetchingColors: true
          };
          case 'FETCHING_COLORS_SUCCESS':
          return {
              ...state,
              error: '',
              fetchingColors: false
          };
          case 'FETCHING_COLORS_FAILED':
          return {
              ...state,
              error: 'fetching failed yo!'
          };
          case 'POSTED_COLORS_START':
          return {
              ...state,
              error: '',
              postingColors: true
          };
          case 'POSTED_COLORS_SUCCESS':
          return {
              ...state,
              error: '',
              postingColors: false,
              colors: [...state, action.payload]
          };
          case 'POSTED_COLORS_FAILURE':
          return {
              ...state,
              error: 'failed adding/posting colors'
          };
          case 'PUT_COLORS_START':
          return {
              ...state,
              putedColors: true,
              error: '',
          };
          case 'PUT_COLORS_SUCCESS':
          return {
              ...state,
              putedColors: false,
              error: '',
              colors: [...state, action.payload]
          };
          case 'PUT_COLORS_FAILURE':
          return {
              ...state,
              error: 'no put happened here'
          };
        default:
        return state;
      }

  };