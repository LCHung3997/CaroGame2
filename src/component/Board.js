import Square from './Square'
import React from "react"

export default class Board extends React.Component {
    renderSquare(i) {
        var arrWin = this.props.arrWins;
        if (arrWin.length === 0) {
            if (this.props.squares[i]=== 'O') {
                return (
                    <Square
                        color="red"
                        style="white"
                        value={this.props.squares[i]}
                        onClick={() => this.props.onClick(i)}
                    />
                );
            }
            else {
                return (
                    <Square
                        color="black"
                        style="white"
                        value={this.props.squares[i]}
                        onClick={() => this.props.onClick(i)}
                    />
                );
            }

        }
        else {
            var check = false;
            arrWin.forEach(element => {
                if (element === i) {
                    check = true;
                }
            })
            if (check) {
                if (this.props.squares[i]=== 'O') {
                    return (
                        <Square
                            color="red"
                            style="#28A745"
                            value={this.props.squares[i]}
                            onClick={() => this.props.onClick(i)}
                        />
                    );
                }
                else {
                    return (
                        <Square
                            color="black"
                            style="#28A745"
                            value={this.props.squares[i]}
                            onClick={() => this.props.onClick(i)}
                        />
                    );
                } 
            }
            else {
                if (this.props.squares[i]=== 'O') {
                    return (
                        <Square
                            color="red"
                            style="white"
                            value={this.props.squares[i]}
                            onClick={() => this.props.onClick(i)}
                        />
                    );
                }
                else {
                    return (
                        <Square
                            color="black"
                            style="white"
                            value={this.props.squares[i]}
                            onClick={() => this.props.onClick(i)}
                        />
                    );
                }
            }

        }

    }
    fCCheck(i) {
        var arrWin = this.props.arrWins;
        arrWin.filter((idx) => {
            if (idx === i)
                return true
            return false

        })

    }
    render() {

        var items = [];
        const itemss = [];



        for (let index = 0; index < 20; index++) {
            const i = 20
            const lenght = 20 * (index + 1)
            for (let y = i * index; y < lenght; y++) {
                items.push(this.renderSquare(y))
            }
            itemss.push(
                <div className="board-row">
                    {items}
                </div>
            )
            items = []
        }


        return (
            <div className="shadow pl-3 pr-3 pb-3 mt-3 bg-white rounded " >
                <div className="status1">
                    <h3>GAME CARRO</h3>
                    {itemss}
                </div>
            </div>
        );
    }
}
