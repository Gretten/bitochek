export const initialState = {
  tables: {},
  total: 0,
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

        const total = getTotal(currentTableState);

        const {type: __, ...rest} = action.payload;
        const newAssetsState = [...currentTableState, rest];

        /*

          1. Add sum to all rows
          2. Get total using that sum fields
          3. Add total to table data
          4. Calculate all totals.
          5. Pass the result to the Price widget.
          6. Add calculations inside the Price widget.
          7. Fix NaN bug.
          Viola!

        */
        const newTablesState = {
          ...state,
          tables: {
            ...tables,
            [type]: newAssetsState,
          }
        };
        
        return newTablesState;
      
      case 'SET_TOTAL':
        const totalSum = '';
        return getTotal(state);

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
