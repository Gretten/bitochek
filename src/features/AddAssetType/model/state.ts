import { addAssetsSum, getTotal } from '../lib';
import { State } from '../types';

export const initialState: State = {
  tables: {},
};

export const reducer = (state: State, action) => {
    switch (action.type) {
      case 'ADD_TABLE':
        if(state.tables[action.payload]) {
            return state;
        };

        return {
          ...state,
          tables: {
            ...state.tables,
            [action.payload]: {
              rows: [],
              total: 0,
            },
          },
        };
      case 'ADD_ASSET':
        const { tables } = state;
        const { name, type} = action.payload;

        if(!(type in tables)) {
          return state;
        };

        const currentTable = tables[type].rows;

        if(currentTable.some((row) => row.name === name)) {
            return state;
        }

        const {type: __, ...newTable} = action.payload;
        const newAssetsState = [...currentTable, newTable];
        const withSumFuelds = addAssetsSum(newAssetsState);
        const tableTotal = getTotal(withSumFuelds);
        
        const newTablesState = {
          ...state,
          tables: {
            ...tables,
            [type]: {
              rows: withSumFuelds,
              total: tableTotal,
            },
          }
        };
                
        return newTablesState;

      // case 'REMOVE_TABLE':
      //   if(!state.tables[action.payload]) {
      //       return state;
      //   };

      //   const { [action.payload]: _, ...newState } = state;
      //   return newState;
        
      default:
        return state;
    }
  }
