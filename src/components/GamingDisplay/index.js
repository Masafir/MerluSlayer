/**
 * NPM import
 */
import React,{ Component } from 'react';

/**
 * Local import
 */
import './display.scss';

/**
 * Code
 */
class GamingDisplay extends Component {

    state = {
        stage: 0,
    }

    componentWillMount(){
        console.log("vous êtes au stage : ",this.state.stage);
    }
    render() {
        return (
            <div id="Display">Le Jeu</div>
        );
    };
} 

/**
 * Export
 */
export default GamingDisplay;
