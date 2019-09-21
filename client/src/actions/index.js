import axios from 'axios';
import { axiosWithAuth } from 'axios';

export const FETCHING_COLORS_START = 'FETCHING_COLORS_START';
export const FETCHING_COLORS_SUCCESS = 'FETCHING_COLORS_SUCCESS';
export const FETCHING_COLORS_FAILURE = 'FETCHING_COLORS_FAILURE';

export const PUT_COLORS_START = 'PUT_COLORS_START';
export const PUT_COLORS_SUCCESS = 'PUT_COLORS_SUCCESS';
export const PUT_COLORS_FAILURE = 'PUT_COLORS_FAILURE';

export const POSTED_COLORS_START = 'POSTED_COLORS_START';
export const POSTED_COLORS_SUCCESS = 'POSTED_COLORS_SUCCESS';
export const POSTED_COLORS_FAILURE = 'POSTED_COLORS_SUCCESS';

export const getColors = () => dispatch => {
    dispatch({ type: FETCHING_COLORS_START });
    axiosWithAuth()
    .get(`/colors`)
        .then(res => {
            dispatch({ type: FETCHING_COLORS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_COLORS_FAILURE, payload: err.response });
        });
};

export const updateColors = (id) => dispatch => {
    dispatch({type: PUT_COLORS_START});
    axiosWithAuth()
    .put(`/colors/${id}`, id)
    .then(res => {
        dispatch({type:PUT_COLORS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type:PUT_COLORS_FAILURE})
    });
};
    

export const addColor = (colors) => dispatch => {
    dispatch({type: POSTED_COLORS_START});
    axiosWithAuth()
    .post(`/colors`, colors)
    .then(res=>{
        dispatch({type: POSTED_COLORS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: POSTED_COLORS_FAILURE, payload: err});
    });
};