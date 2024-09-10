export const initialState = {
  tables: [],
  data: null,
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
          data: { ...state.data, [action.payload]: [] },
        };
      default:
        return state;
    }
  }
