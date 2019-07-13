export default (state, action) => {
  console.log('current state', state);
  console.log('action', action);
  switch (action.type) {
    case 'ADD ROW':
      console.log('add row', state);
      return {
        ...state,
        boardX: state.boardX.concat(false)
      }
    case 'ADD COLUMN':
      console.log('add column');
      return {
        ...state,
        boardY: state.boardY.concat(false)
      }
    case 'MOVE RIGHT':
      console.log('move right');
      return state;
    case 'SHOW BOARD':
      console.log('board after action dispatched to store reducer: \n', state);
      return state;
    default: 
      console.log('default action');
      return state;
  }
}

