import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    //  this.myfunction = this.myfunction.bind(this)
  }

  // myfunction(){
  //   this.props.dispatch({type:'AGE_UP'})
  // }

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        {/* <button onClick={()=>this.props.dispatch({type:'AGE_UP'})}>Age UP</button> */}
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age DOWN</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', val: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', val: 1 })
  }
}


// export default connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
