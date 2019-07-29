/**
 * NPM import
 */
import React,{ Component } from 'react';
import Choose from './choose';
import Scribe from './scribe';
/**
 * Local import
 */
import './gamingdisplay.scss';

/**
 * Code
 */
class GamingDisplay extends Component {

    switchComponent = () => {
        const { event } = this.props;
        console.log("on passe quand même par la ", this.props.event);
        switch (event) {
            case "choose":
                return (
                    <Choose />
                );
            case "scribe":
                return (
                    <Scribe />
                );       
            default:
                break;
        }
    }
    
    render() {

        return (
            <div className="gaming-display">
            {this.switchComponent()}
            </div>
        );
    };
} 

/**
 * Export
 */
export default GamingDisplay;
