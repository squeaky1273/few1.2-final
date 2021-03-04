import React, { Component } from 'react';
import './Like.css';

class Like extends Component {
    constructor(props) {
        super(props)

        this.state = { count: 0  }
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
      }
      
    decrementCount = () => {
        this.setState({ count: this.state.count - 1 });
      }

    render() {
        let { count } =this.state
        return (
            <div>
                <p>Likes: { count } </p>
                <button onClick={(e) => {this.decrementCount()}}>👎</button>
                <button onClick={(e) => {this.incrementCount()}}>👍</button>
            </div>
        );
}

}

export default Like; 