/**
 * NPM import
 */
import React,{ Component } from 'react';
import Lifebar from '../Lifebar';
import TextArea from '../TextArea';
import GamingDisplay from '../GamingDisplay';
import EnemyDisplay from '../EnemyDisplay';
import Herodisplay from '../HeroDisplay';
import Timer from '../Timer';
import Zone from '../Zone';
/**
 * Local import
 */
import './display.scss';

/**
 * Code
 */
class Display extends Component {


    componentWillMount(){
        console.log(this.props);
    }
    render() {
        
        return (
            <div id="Display">
                <Lifebar lifepoint={this.props.life} />
                <Timer />
                <EnemyDisplay />
                <Zone />
                <TextArea />
                <GamingDisplay />
                <Herodisplay />
            </div>
        );
    };
} 

/**
 * Export
 */
export default Display;
