export const initialState = {
  tables: {
    crypto: [
          {
              name: 'Bitcoin',
              count: 1,
              price: 57000,
          },
          {
              name: 'Ethereum',
              count: 4,
              price: 4766,
          }
        ]
      },
};

export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TABLE':
        if(state.tables[action.payload]) {
            return state;
        };

        return {
          ...state,
          tables: {
            ...state.tables,
            [action.payload]: [],
          },
        };
      case 'ADD_ASSET':
        const { tables } = state;
        const { name, type} = action.payload;

        if(!(type in tables)) {
          return state;
        };

        const currentTableState = tables[type];

        if(currentTableState.some((row) => row.name === name)) {
            return state;
        }

        const {type: __, ...rest} = action.payload;
        const newAssetsState = [...currentTableState, rest];

        const newTablesState = {
          ...state,
          tables: {
            ...tables,
            [type]: newAssetsState,
          }
        }
        
        return newTablesState;
      case 'REMOVE_TABLE':
        if(!state.tables[action.payload]) {
            return state;
        };

        const { [action.payload]: _, ...newState } = state;
        return newState;
        
      default:
        return state;
    }
  }
