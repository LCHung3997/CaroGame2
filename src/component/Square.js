import React from "react"

export default class Square extends React.Component {

    render() {
        //console.log(this.props.background)
        const divStyle = {            
            background: this.props.style,     
            color: this.props.color      
        };
        //console.log(this.props.)
        return (
            <button 
                style={divStyle}
                className="square"
                onClick={this.props.onClick}            >
                {this.props.value}
            </button>
        );
    }
}