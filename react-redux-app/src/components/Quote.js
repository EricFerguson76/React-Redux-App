import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getQuote } from '../actions'

const Quote = props => {
    return (
      <div>
        <h1>Inspirational Quote For You</h1>
        {!props.quoteText && !props.isFetching && <p>Get a Quote for Inspiration! </p>}
        {props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {props.quoteText && <p>{props.quoteText.quoteText}</p>}
        <button onClick={props.getQuote}>Get Quote</button>
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return {
      quoteText: state.quoteText,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getQuote }
  )(Quote);