import { Component } from "react";
 
class HelloAsClass extends Component {
    render() {
        return <div>Hello, {this.props.who}!</div>
    };
}


export default HelloAsClass;