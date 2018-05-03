import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;