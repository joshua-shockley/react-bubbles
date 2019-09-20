import axios from 'axios';

export const FETCHING_COLORS_START = 'FETCHING_COLORS_START';
export const FETCHING_COLORS_SUCCESS = 'FETCHING_COLORS_SUCCESS';
export const FETCHING_COLORS_FAILURE = 'FETCHING_COLORS_FAILURE';

export const PUT_COLORS_START = 'PUT_COLORS_START';
export const PUT_COLORS_SUCCESS = 'PUT_COLORS_SUCCESS';
export const PUT_COLORS_FAILURE = 'PUT_COLORS_FAILURE';

export const POSTED_COLORS_START = 'POSTED_COLORS_START';
export const POSTED_COLORS_SUCCESS = 'POSTED_COLORS_SUCCESS';
export const POSTED_COLORS_FAILURE = 'POSTED_COLORS_SUCCESS';

export const getSmurf = () => dispatch => {
    dispatch({ type: FETCHING_COLORS_START });
    axios.get(`http://localhost:5000/api`)
        .then(res => {
            dispatch({ type: FETCHING_COLORS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_COLORS_FAILURE, payload: err.response });
        });
};
