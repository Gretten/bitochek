export const initialState = {
  tables: ['crypto'],
};

export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TABLE':
        if(state.tables.includes(action.payload)) {
            return state;
        };
        return {
          ...state,
          tables: [...state.tables, action.payload],
        };
      case 'REMOVE_TABLE':
        if(!(state.tables.includes(action.payload))) {
            return state;
        };
        return {
          ...state,
          tables: [...state.tables.filter((el => el === action.payload))]
        };
      default:
        return state;
    }
  }
