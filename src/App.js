import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    arr: Array(10).fill(0),
    count: 0,
    apotelesma: 0
  }

  isClicked(key){
    const { count, arr, apotelesma } = this.state
    const tmpArr = arr
    if (key !== '+' && key !== '-' && key !== 'x' && key !== '/' && key !== '=' && key !== 'ON' && key !== 'OFF') {
      tmpArr[count] = key
      console.log(tmpArr);
      this.setState({arr: tmpArr, count: count + 1})
      console.log(count);
    } else {
        if (key !== 'ON' && key !== 'OFF') {
          num = tmpArr[0]*(10^(count - 1)) + tmpArr[1]*(10^(count - 2)) + tmpArr[2]*(10^(count - 3)) +
          tmpArr[3]*(10^(count - 4)) + tmpArr[4]*(10^(count - 5)) + tmpArr[5]*(10^(count - 6)) +
          tmpArr[6]*(10^(count - 7)) + tmpArr[7]*(10^(count - 8)) + tmpArr[8]*(10^(count - 9)) + tmpArr[9]*(10^(count - 10))

          if (key = '+') {
            action = 1
            this.setState({apotelesma: num, count: 0})
          }

          if (key = '-') {
            action = 2
            this.setState({apotelesma: num , count: 0})
          }

          if (key = 'x') {
            action = 3
            this.setState({apotelesma: num, count: 0})
          }

          if (key = '/') {
            action = 4
            this.setState({apotelesma: num, count: 0})
          }

          if (key = '=') {
            if action = 1 {this.setState({apotelesma: this.state.apotelesma + num, count: 0})}
            if action = 2 {this.setState({apotelesma: this.state.apotelesma - num, count: 0})}
            if action = 3 {this.setState({apotelesma: this.state.apotelesma * num, count: 0})}
            if action = 4 {this.setState({apotelesma: this.state.apotelesma / num, count: 0})}
          }

        } else {
            //on - off
        }
    }
  }

  render() {
    return (
      <div>
        <table>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

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
            <td onClick = {()=>this.isClicked('x')}> x </td>
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
