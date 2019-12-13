import axios from 'axios';

export const FETCH_CARD_START = 'FETCH_QUOTE_START';
export const FETCH_CARD_SUCCESS = 'FETCH_QOUTE_SUCCESS';
export const FETCH_CARD_FAILURE = 'FETCH_QOUTE_FAILURE';


export const getCard = () => dispatch => {
    dispatch({ type: FETCH_CARD_START });
    axios.get('https://quote-garden.herokuapp.com/quotes/random')
    .then(res => {
        return( console.log(res))
    })
}

