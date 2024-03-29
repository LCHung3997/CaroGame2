import React from 'react';
import Swal from 'sweetalert2';
import './App.css';
import Board from './component/Board';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(400).fill(null)
        }
      ],
      arrWin: [],
      arrWinTemp: [],
      stepNumber: 0,
      xIsNext: true,
      check: false,
      checkWin: false,
      moves: [],
      isIncrease: true,
      isDecrease: false
    };
  }

  handleClick(i) {
    let { history } = this.state;
    const { stepNumber, check, xIsNext } = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const newSquaresArr = current.squares.slice();
    if (check) {
      Swal.fire({
        imageUrl:
          'https://www.cointelligence.com/content/wp-content/uploads/2019/02/Game-Over-Hodler.jpg',
        title: 'Game over',
        text: 'Please restart game!!!'
      });
      return null;
    }

    if (newSquaresArr[i] === null) {
      const length = 20;
      const arrTem = [];
      newSquaresArr[i] = xIsNext ? 'X' : 'O';

      this.setState({
        history: history.concat([
          {
            squares: newSquaresArr
          }
        ]),
        stepNumber: history.length,
        xIsNext: !xIsNext
      });

      switch (newSquaresArr[i]) {
        case 'O': {
          // hàng
          for (let colum = 1; colum < 6; colum += 1) {
            if (
              ((newSquaresArr[i - colum] === 'X' &&
                newSquaresArr[i - colum + 6] !== 'X') ||
                (newSquaresArr[i - colum] !== 'X' &&
                  newSquaresArr[i - colum + 6] === 'X') ||
                (newSquaresArr[i - colum] !== 'X' &&
                  newSquaresArr[i - colum + 6] !== 'X')) &&
              newSquaresArr[i - colum + 1] === 'O' &&
              newSquaresArr[i - colum + 2] === 'O' &&
              newSquaresArr[i - colum + 3] === 'O' &&
              newSquaresArr[i - colum + 4] === 'O' &&
              newSquaresArr[i - colum + 5] === 'O'
            ) {
              arrTem.push(i - colum + 1);
              arrTem.push(i - colum + 2);
              arrTem.push(i - colum + 3);
              arrTem.push(i - colum + 4);
              arrTem.push(i - colum + 5);
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)'
              });
              return null;
            }
          }
          // dọc
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * length] === 'X' &&
                newSquaresArr[i + (-row + 6) * length] !== 'X') ||
                (newSquaresArr[i - row * length] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * length] === 'X') ||
                (newSquaresArr[i - row * length] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * length] !== 'X')) &&
              newSquaresArr[i + (-row + 1) * 20] === 'O' &&
              newSquaresArr[i + (-row + 2) * 20] === 'O' &&
              newSquaresArr[i + (-row + 3) * 20] === 'O' &&
              newSquaresArr[i + (-row + 4) * 20] === 'O' &&
              newSquaresArr[i + (-row + 5) * 20] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * 20);
              arrTem.push(i + (-row + 2) * 20);
              arrTem.push(i + (-row + 3) * 20);
              arrTem.push(i + (-row + 4) * 20);
              arrTem.push(i + (-row + 5) * 20);
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)'
              });
              return null;
            }
          }
          // chéo phải
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * (length + 1)] === 'X' &&
                newSquaresArr[i + (-row + 6) * (length + 1)] !== 'X') ||
                (newSquaresArr[i - row * (length + 1)] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * (length + 1)] === 'X') ||
                (newSquaresArr[i - row * (length + 1)] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * (length + 1)] !== 'X')) &&
              newSquaresArr[i + (-row + 1) * (length + 1)] === 'O' &&
              newSquaresArr[i + (-row + 2) * (length + 1)] === 'O' &&
              newSquaresArr[i + (-row + 3) * (length + 1)] === 'O' &&
              newSquaresArr[i + (-row + 4) * (length + 1)] === 'O' &&
              newSquaresArr[i + (-row + 5) * (length + 1)] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * (length + 1));
              arrTem.push(i + (-row + 2) * (length + 1));
              arrTem.push(i + (-row + 3) * (length + 1));
              arrTem.push(i + (-row + 4) * (length + 1));
              arrTem.push(i + (-row + 5) * (length + 1));
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)'
              });
              return null;
            }
          }

          // chéo trái
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * (length - 1)] === 'X' &&
                newSquaresArr[i + (-row + 6) * (length - 1)] !== 'X') ||
                (newSquaresArr[i - row * (length - 1)] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * (length - 1)] === 'X') ||
                (newSquaresArr[i - row * (length - 1)] !== 'X' &&
                  newSquaresArr[i + (-row + 6) * (length - 1)] !== 'X')) &&
              newSquaresArr[i + (-row + 1) * (length - 1)] === 'O' &&
              newSquaresArr[i + (-row + 2) * (length - 1)] === 'O' &&
              newSquaresArr[i + (-row + 3) * (length - 1)] === 'O' &&
              newSquaresArr[i + (-row + 4) * (length - 1)] === 'O' &&
              newSquaresArr[i + (-row + 5) * (length - 1)] === 'O'
            ) {
              arrTem.push(i + (-row + 1) * (length - 1));
              arrTem.push(i + (-row + 2) * (length - 1));
              arrTem.push(i + (-row + 3) * (length - 1));
              arrTem.push(i + (-row + 4) * (length - 1));
              arrTem.push(i + (-row + 5) * (length - 1));
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: '0 is winner :)'
              });
              return null;
            }
          }
          break;
        }
        case 'X': {
          // hàng
          for (let colum = 1; colum < 6; colum += 1) {
            if (
              ((newSquaresArr[i - colum] === 'O' &&
                newSquaresArr[i - colum + 6] !== 'O') ||
                (newSquaresArr[i - colum] !== 'O' &&
                  newSquaresArr[i - colum + 6] === 'O') ||
                (newSquaresArr[i - colum] !== 'O' &&
                  newSquaresArr[i - colum + 6] !== 'O')) &&
              newSquaresArr[i - colum + 1] === 'X' &&
              newSquaresArr[i - colum + 2] === 'X' &&
              newSquaresArr[i - colum + 3] === 'X' &&
              newSquaresArr[i - colum + 4] === 'X' &&
              newSquaresArr[i - colum + 5] === 'X'
            ) {
              arrTem.push(i - colum + 1);
              arrTem.push(i - colum + 2);
              arrTem.push(i - colum + 3);
              arrTem.push(i - colum + 4);
              arrTem.push(i - colum + 5);
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)'
              });
              return null;
            }
          }

          // dọc
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * length] === 'O' &&
                newSquaresArr[i + (-row + 6) * length] !== 'O') ||
                (newSquaresArr[i - row * length] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * length] === 'O') ||
                (newSquaresArr[i - row * length] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * length] !== 'O')) &&
              newSquaresArr[i + (-row + 1) * 20] === 'X' &&
              newSquaresArr[i + (-row + 2) * 20] === 'X' &&
              newSquaresArr[i + (-row + 3) * 20] === 'X' &&
              newSquaresArr[i + (-row + 4) * 20] === 'X' &&
              newSquaresArr[i + (-row + 5) * 20] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * 20);
              arrTem.push(i + (-row + 2) * 20);
              arrTem.push(i + (-row + 3) * 20);
              arrTem.push(i + (-row + 4) * 20);
              arrTem.push(i + (-row + 5) * 20);
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)'
              });
            }
          }
          // chéo phải
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * (length + 1)] === 'O' &&
                newSquaresArr[i + (-row + 6) * (length + 1)] !== 'O') ||
                (newSquaresArr[i - row * (length + 1)] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * (length + 1)] === 'O') ||
                (newSquaresArr[i - row * (length + 1)] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * (length + 1)] !== 'O')) &&
              newSquaresArr[i + (-row + 1) * (length + 1)] === 'X' &&
              newSquaresArr[i + (-row + 2) * (length + 1)] === 'X' &&
              newSquaresArr[i + (-row + 3) * (length + 1)] === 'X' &&
              newSquaresArr[i + (-row + 4) * (length + 1)] === 'X' &&
              newSquaresArr[i + (-row + 5) * (length + 1)] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * (length + 1));
              arrTem.push(i + (-row + 2) * (length + 1));
              arrTem.push(i + (-row + 3) * (length + 1));
              arrTem.push(i + (-row + 4) * (length + 1));
              arrTem.push(i + (-row + 5) * (length + 1));
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)'
              });
            }
          }

          // chéo trái
          for (let row = 1; row < 6; row += 1) {
            if (
              ((newSquaresArr[i - row * (length - 1)] === 'O' &&
                newSquaresArr[i + (-row + 6) * (length - 1)] !== 'O') ||
                (newSquaresArr[i - row * (length - 1)] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * (length - 1)] === 'O') ||
                (newSquaresArr[i - row * (length - 1)] !== 'O' &&
                  newSquaresArr[i + (-row + 6) * (length - 1)] !== 'O')) &&
              newSquaresArr[i + (-row + 1) * (length - 1)] === 'X' &&
              newSquaresArr[i + (-row + 2) * (length - 1)] === 'X' &&
              newSquaresArr[i + (-row + 3) * (length - 1)] === 'X' &&
              newSquaresArr[i + (-row + 4) * (length - 1)] === 'X' &&
              newSquaresArr[i + (-row + 5) * (length - 1)] === 'X'
            ) {
              arrTem.push(i + (-row + 1) * (length - 1));
              arrTem.push(i + (-row + 2) * (length - 1));
              arrTem.push(i + (-row + 3) * (length - 1));
              arrTem.push(i + (-row + 4) * (length - 1));
              arrTem.push(i + (-row + 5) * (length - 1));
              this.setState({
                check: true,
                checkWin: true,
                arrWin: arrTem,
                arrWinTemp: arrTem
              });
              Swal.fire({
                imageUrl:
                  'https://st.quantrimang.com/photos/image/2018/03/06/danh-co-caro-640.jpg',
                title: 'HAPPY',
                text: 'X is winner :)'
              });
            }
          }
          break;
        }
        default:
          break;
      }
    }
    return null;
  }

  handleClickReset() {
    this.setState({
      history: [
        {
          squares: Array(400).fill(null)
        }
      ],
      arrWin: [],
      stepNumber: 0,
      xIsNext: true,
      check: false,
      isIncrease: true,
      isDecrease: false
    });
  }

  jumpTo(step) {
    const { history, checkWin, arrWinTemp } = this.state;
    const length = history.length - 1;
    if (checkWin === true && step === length) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        arrWin: arrWinTemp,
        check: true
      });
    } else {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        arrWin: [],
        check: false
      });
    }
  }

  sort(list) {
    const newList = [];
    let size = list.length;
    for (let i = 0; i < list.length; i += 1) {
      newList.push(list[size - 1]);
      size -= 1;
    }
    this.setState({
      moves: newList
    });
  }

  fIncrease(list) {
    const { isDecrease } = this.state;
    if (isDecrease) {
      this.sort(list);
      this.setState({
        isIncrease: true,
        isDecrease: false
      });
      return list;
    }
    return null;
  }

  fDecrease(list) {
    const { isIncrease } = this.state;

    if (isIncrease) {
      this.sort(list);
      this.setState({
        isIncrease: false,
        isDecrease: true
      });
      return list;
    }

    return null;
  }

  sortHistory(list) {
    // eslint-disable-next-line no-console
    console.log('sortHistory', this);
    const newList = [];
    let size = list.length;
    for (let i = 0; i < list.length; i += 1) {
      newList.push(list[size - 1]);
      size -= 1;
    }
    return newList;
  }

  render() {
    const {
      history,
      stepNumber,
      xIsNext,
      isDecrease,
      fIncrease,
      moves,
      arrWin
    } = this.state;
    const current = history[stepNumber];
    const status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    let movess = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      const keyIdx = move;
      if (move === stepNumber)
        return (
          // <option style={{background: "#28A745"}} key={move} onClick={() => this.jumpTo(move)}><button>{desc}</button></option>
          <li key={keyIdx}>
            <button
              type="button"
              style={{ background: '#28A745' }}
              onClick={() => this.jumpTo(move)}
            >
              {desc}
            </button>
          </li>
        );

      return (
        // <option key={move} onClick={() => this.jumpTo(move)}>{desc}</option>
        <li key={keyIdx}>
          <button type="button" onClick={() => this.jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });
    if (isDecrease) {
      movess = this.sortHistory(movess);
    }

    // console.log(moves[moves.length].key)
    return (
      <div className="game">
        <div className="game-board status2">
          <div className="status3">
            <h5>
              <u>{status}</u>
            </h5>
            <br />
            <br />
            <button
              onClick={() => this.handleClickReset()}
              type="button"
              className="btn btn-success"
            >
              Restart game
            </button>
            <br />
            <br />
            <br />
            <div className="table-wrapper-scroll-y my-custom-scrollbar">
              <table className="  table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th className="App" scope="col">
                      MoveList
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{fIncrease ? moves : movess}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />

            <div>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.fIncrease(moves)}
              >
                Increase
              </button>
              &emsp;
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.fDecrease(moves)}
              >
                Decrease
              </button>
            </div>
          </div>
          <Board
            arrWins={arrWin}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            color={xIsNext}
          />
        </div>
      </div>
    );
  }
}

export default App;
