import createInitialState from '../utils/createInitialState';

const tickSquare = (state = createInitialState(), action) => {
  switch (action.type) {
    case 'TICK_SQUARE':
      return {
        ...state,
        history: action.history.concat([
          {
            squares: action.newSquaresArr
          }
        ]),
        stepNumber: action.history.length,
        xIsNext: !action.xIsNext
      };
    case 'CHECK_WIN':
      return {
        ...state,
        check: true,
        checkWin: true,
        arrWin: action.arrTem,
        arrWinTemp: action.arrTem
      };
    case 'RESTART_GAME':
      return {
        ...state,
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
      };
    case 'GOTO_MOVE':
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
        arrWin: action.arrWinTemp,
        check: true
      };
    case 'GOTO_MOVE_WIN':
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
        arrWin: [],
        check: false
      };
    case 'SORT_LIST':
      return {
        ...state,
        moves: action.newList
      };
    case 'INCREASE':
      return {
        ...state,
        isIncrease: true,
        isDecrease: false
      };

    case 'DECREASE':
      return {
        ...state,
        isIncrease: false,
        isDecrease: true
      };

    default:
      return state;
  }
};

export default tickSquare;
