import React, { Component} from 'react';
import Button from './components/atoms/button/Button';

export default class App extends Component {

  constructor(){
    super();
    this.state= {
      count:0
    }
  }

  incrementCount= () => {
    this.setState({
      count:this.state.count+1
    })
  }
  
  decrementCount= () => {
    this.setState({
      count:this.state.count-1
    })
  }

  render() {
    let { count } =this.state
    return (
      <div>
        <h2>Count: { count } </h2>
        <Button
          title = { "+ add" }
          task = { () => this.incrementCount() }
        />
        <Button
          title = { "- subtract" }
          task = { () => this.decrementCount() }
        />
       </div>
    );
  }

}
