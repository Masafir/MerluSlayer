/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
import './home.scss';

/**
 * Code
 */

 class Home extends React.Component {
    
    gotonextpage = () => {
        const { gotostage,actual } = this.props;
        console.log('go to next stage',actual);
        gotostage(1);
    }

    render() {
         console.log(this.props);
    return(
        <div className="home">
            <div className="home-citation">Bienvenue dans un donjon pour les cons le fameux conjon</div>
            <button className="app-button" onClick={this.gotonextpage}>Click ta race </button>
        </div>
    );
} };

Home.propTypes = {
    letsgo: PropTypes.func,
};
/**
 * Export
 */
export default Home;
