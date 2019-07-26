/**
 * NPM import
 */
import React,{ Component } from 'react';
import Lifebar from '../Lifebar';
import TextArea from '../TextArea';
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
        const { life } = this.props;
        return (
            <div id="Display">
                <Lifebar lifepoint={this.props.life} />
                <TextArea />
                <div>Stageazeaze 1</div>
            </div>
        );
    };
} 

/**
 * Export
 */
export default Display;
