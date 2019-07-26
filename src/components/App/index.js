/**
 * NPM import
 */
import React from 'react';
import Home from '../Home';
import Display from '../GamingDisplay';
/**
 * Local import
 */
import './app.scss';

/**
 * Code
 */
class App extends React.Component {


  componentWillMount(){
      console.log("vous êtes au stage : ",this.props.actual);
      console.log(this.props.stage);
    
  }

  gohome = () => {

    const { gotostage } = this.props;
    gotostage(0);
  }
  
  render() {
      const { actual,stage } = this.props;
      /* const ActualComponent = React.createElement(this.props.stage,{...this.props}); */
      return (
        <div id="app">
          <h1 id="title">CONJON</h1>
          <div id="app-display">
          {React.createElement(stage,{...this.props})}
          </div>
        </div>
          
      );
  };
} 


/**
 * Export
 */
export default App;
