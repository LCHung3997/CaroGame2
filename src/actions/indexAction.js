import {
  TICK_SQUARE,
  CHECK_WIN,
  RESTART_GAME,
  GOTO_MOVE,
  GOTO_MOVE_WIN,
  SORT_LIST,
  INCREASE,
  DECREASE
} from '../constants/actions';

export const tickSquare = (index, newSquaresArr, history, xIsNext) => ({
  type: TICK_SQUARE,
  index,
  newSquaresArr,
  history,
  xIsNext
});

export const checkWin = arrTem => ({
  type: CHECK_WIN,
  arrTem
});

export const restartGame = () => ({
  type: RESTART_GAME
});

export const goToMove = (step, arrWinTemp) => ({
  type: GOTO_MOVE,
  step,
  arrWinTemp
});

export const goToMoveWin = step => ({
  type: GOTO_MOVE_WIN,
  step
});

export const sortList = newList => ({
  type: SORT_LIST,
  newList
});

export const setIncrease = () => ({
  type: INCREASE
});

export const setDecrease = () => ({
    type: DECREASE
  });
  
  
