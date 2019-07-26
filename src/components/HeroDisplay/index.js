/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */
import './herodisplay.scss';

/**
 * Code
 */

 class Herodisplay extends React.Component {
    

    render() {
         console.log(this.props);
    return(
        <div className="hero-display">
            <img id="hero-img" src={require('../../img/Hero.gif')} />
        </div>
    );
} };

/**
 * Export
 */
export default Herodisplay;