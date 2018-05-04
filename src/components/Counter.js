import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

import Value from './Value';
import Control from './Control';
import { connect, bindActionCreators } from 'react-redux';
import * as types from '../actions';

const propTypes = {

};
const defaultProps = {

};

class Counter extends Component { 
    constructor(props) { 
        super(props)
    }

    render() {
        return(
            <div>
                <Value/>
                <Control/>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    /**
     * acions : ActionCreators 들어있는 객체
     * 이름은 ActionCreators의 이름 그대로 쓰임 
     * (ex:ActionTypes.js - increment())
     */
    // return bindActionCreators(actions, dispatch);

    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}

export default Counter;