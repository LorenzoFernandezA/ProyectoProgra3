import React from "react";
import { Component } from "react";

class CartaPopular extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <article>
                <img src={this.props.imagen} alt={this.props.titulo} />
                <h3>{this.props.titulo}</h3>
            </article>
        )
    }
}
export default CartaPopular;