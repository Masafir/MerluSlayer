/**
 * NPM import
 */
import React,{ Component } from 'react';

/**
 * Local import
 */
import './enemydisplay.scss';

/**
 * Code
 */
class EnemyDisplay extends Component {

    
    render() {
        return (
            <div className="enemy-display">
            <img id="enemy-img" src={require('../../img/leroiLiche.gif')} /> </div>
        );
    };
} 

/**
 * Export
 */
export default EnemyDisplay;
