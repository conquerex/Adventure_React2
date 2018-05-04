import React, { Component } from 'react'; 
import PropTypes from 'prop-types';

import Value from './Value';
import Control from './Control';
// import { connect, bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {

};
const defaultProps = {

};

class Counter extends Component { 
    constructor(props) { 
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        // RGB 세팅
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]},${color[1]},${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor} />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);