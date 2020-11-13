import React, { Component } from 'react'

export default class Play extends Component {
    constructor(props) {
        super(props)
        this.state = {
                 value: 28
        }

    }
    onClicked = () =>{
        this.setState ({
            value: this.state.value +1
        })
    }

    render() { 
        return (
            <div className="outer">
                <h2>{this.state.value}</h2>
                <button onClick={this.onClicked}>Click here</button>
            </div>
        )
    }
}
