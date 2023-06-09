import React, { Component } from "react";
class DemoStateClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    };

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        const { name } = this.props;
        return (
            <div>
                <p><h1>Hello, {name}!</h1>  count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment Count (Class)</button>
            </div>

        );
    }
}


export default DemoStateClass;