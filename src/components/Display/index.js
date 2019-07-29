/**
 * NPM import
 */
import React,{ Component } from 'react';
import Lifebar from '../Lifebar';
import TextArea from '../TextArea';
import GamingDisplay from '../../containers/GameContainer';
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

    gohome = () => {

        const { gotostage } = this.props;
        gotostage(0);
      }
    render() {
        console.log('on passe quand même ici');
        return (
            <div id="Display">
                <Lifebar lifepoint={this.props.life} />
                <Timer />
                <EnemyDisplay />
                <Zone />
                <TextArea />
                <GamingDisplay />
                <Herodisplay />
                <button className="app-button" onClick={this.gohome}>Give up</button>
            </div>
        );
    };
} 

/**
 * Export
 */
export default Display;
