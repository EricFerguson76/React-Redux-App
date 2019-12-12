import axios from 'axios';

export const FETCH_CARD_START = 'FETCH_CARD_START';
export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE';


export const getCard = () => dispatch => {
    dispatch({ type: FETCH_CARD_START });
    axios.get('https://www.breakingbadapi.com/api/characters')
    .then(res => {
        return( console.log(res))
    })
}

