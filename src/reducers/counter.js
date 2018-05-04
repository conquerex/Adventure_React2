import * as types from '../actions/ActionTypes';

// 초기상태
// 배경색상은 별도로 reducer로
const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

// state = initialState : 기본인수
export default function counter(state = initialState, action) {
    // if(typeof state === 'undefined') {
    //     return initialState;
    // } else {
    //     /*...*/
    // }

    switch(action.type) {
        case types.INCREMENT:
            // Use Spread
            return {
                ...state,
                number: state.number +1,
                dumbObject: { ...state.dumbObject, u: 0}
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number -1
            };
        default:
            // SET_COLOR case
            return state;
    }

    return state;
}
