/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import './timer.scss';

/**
 * Code
 */

 class Timer extends React.Component {
    

    render() {
         console.log(this.props);
    return(
        <div className="timer">
            00.00
        </div>
    );
} };

/**
 * Export
 */
export default Timer;