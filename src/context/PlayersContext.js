import createDataContext from './createDataContext';
import fpRankings from '../api/fpRankings';

const prevState = [];

const playersReducer = (state, action) => {
  const position = {
    all: false,
    qbs: true,
    rbs: false,
    wrs: false,
    tes: false
  }

  switch (action.type) {
    case 'get_standard_rankings':
      return action.payload;
    case 'get_half_ppr_rankings':
      return action.payload;
    case 'get_ppr_rankings':
      return action.payload;
    case 'draft_player':
      prevState.push([...state]);
      return state.filter((player) => player.name !== action.payload );
    case 'revert_pick':
      if (prevState.length === 0) {
        return state;
      }
      state = prevState.pop();
      return state;
    case 'qbs_select':
      position.qbs = true;
      position.all = false;
      console.log(position)
      return position;
    // case 'show_all':
    //   state = allPlayers.pop();
    //   allPlayers.push([...state])
    //   return state;
    // case 'show_position':
    //   console.log(state)
    //   state = allPlayers.pop();
    //   allPlayers.push([...state]);
    //   return state.filter((player) => player.position === action.payload );
    default:
      return state;
  }
};

const getStandardRankings = (dispatch) => {
  return async () => {
    const response = await fpRankings.get('/rankings?format=standard');

    dispatch({ type: 'get_standard_rankings', payload: response.data.rankings });
  };
};

const getHalfPPRRankings = (dispatch) => {
  return async () => {
    const response = await fpRankings.get('/rankings?format=half_ppr');

    dispatch({ type: 'get_half_ppr_rankings', payload: response.data.rankings });
  };
};

const getPPRRankings = (dispatch) => {
  return async () => {
    const response = await fpRankings.get('/rankings?format=ppr');

    dispatch({ type: 'get_ppr_rankings', payload: response.data.rankings });
  };
};

const draftPlayer = (dispatch) => {
  return (name) => {
    dispatch({ type: 'draft_player', payload: name })  
  }
}

const revertPick = (dispatch) => {
  return () => {
    dispatch({ type: 'revert_pick' })
  };
};

const qbsSelect = (dispatch) => {
  return () => {
    dispatch({ type: 'qbs_select'})
  };
};

// const updateBoard = (dispatch) => {
//   return () => {
//     dispatch({ type: 'update_board'})
//   };
// };

// const showAll = (dispatch) => {
//   return async () => {
//     dispatch({ type: 'show_all' })
//   }
// }

// const showPosition = (dispatch) => {
//   return async (position) => {
//     dispatch({ type: 'show_position', payload: position})
//   }
// }

export const { Context, Provider } = createDataContext(
  playersReducer, 
  { getStandardRankings, 
    getHalfPPRRankings, 
    getPPRRankings, 
    draftPlayer, 
    revertPick,
    qbsSelect
  },[]
);
