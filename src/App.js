import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    apotelesma: 0,
    num: '',
    praksiAigain: true,
    currentNum: '',
    sum: 0
  }

  calculations(key){
    const { sum, num, currentNum } = this.state
    switch (key) {
      case '+':
        this.setState({sum: sum + parseInt(currentNum)})
        break;
      case '-':
        this.setState({sum: sum + parseInt(currentNum)})
        break;
      case '*':
        this.setState({sum: sum * parseInt(currentNum)})
        break;
      case '/':
        this.setState({sum: sum / parseInt(currentNum)})
        break;
      default:

    }
  }

  isClicked(key){
    const praksis = ['+', '-', '*', '/']
    const { sum, num, praksiAigain, currentNum } = this.state
    const isPraksi = praksis.find((praksi)=> key === praksi)
    const isNumber = typeof key === 'number'
    if (isNumber){
      this.setState({num: num + key, currentNum: currentNum + key, praksiAigain: true})
    }
    if ( isPraksi && praksiAigain ) {
      this.calculations(key)
      this.setState({num: num + key, currentNum : '', praksiAigain: false})
    }
  }

  render() {
    const { num, sum } = this.state
    console.log(sum);
    return (
      <div>
        <div className ="display">
          <div className="up">{num}</div>
          <div className="down">1+5+5</div>
        </div>

        <table>
          <tr>
            <td></td>
            <td></td>
            <td> ON </td>
            <td> OFF </td>
          </tr>

          <tr>
            <td onClick = {()=>this.isClicked(7)}> 7 </td>
            <td onClick = {()=>this.isClicked(8)}> 8 </td>
            <td onClick = {()=>this.isClicked(9)}> 9 </td>
            <td onClick = {()=>this.isClicked('+')}> + </td>
          </tr>

          <tr>
            <td onClick = {()=>this.isClicked(4)}> 4 </td>
            <td onClick = {()=>this.isClicked(5)}> 5 </td>
            <td onClick = {()=>this.isClicked(6)}> 6 </td>
            <td onClick = {()=>this.isClicked('-')}> - </td>
          </tr>

          <tr>
            <td onClick = {()=>this.isClicked(1)}> 1 </td>
            <td onClick = {()=>this.isClicked(2)}> 2 </td>
            <td onClick = {()=>this.isClicked(3)}> 3 </td>
            <td onClick = {()=>this.isClicked('*')}> x </td>
          </tr>

          <tr>
            <td onClick = {()=>this.isClicked(0)}> 0 </td>
            <td onClick = {()=>this.isClicked('.')}> . </td>
            <td onClick = {()=>this.isClicked('=')}> = </td>
            <td onClick = {()=>this.isClicked('/')}> / </td>
          </tr>

        </table>

        <p>{this.state.apotelesma}</p>
      </div>
    );
  }
}

export default App;
