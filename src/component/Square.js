import React from "react"

export default class Square extends React.PureComponent {

    render() {
        const { styles, color, onClick, value } = this.props
        // console.log(this.props.background)
        const divStyle = {
            background: styles,
            color
        };
        // console.log(this.props.)
        return (
            <button
                type="button"
                style={divStyle}
                className="square"
                onClick={onClick}            >
                {value}
            </button>
        );
    }
}