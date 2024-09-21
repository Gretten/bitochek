import { addAssetsSum, getTotal } from '../lib';
import { State } from '../types';

export const initialState: State = {};

export const reducer = (state: State, action) => {
    switch (action.type) {
      // case 'ADD_TABLE':
      //   if(state.tables[action.payload]) {
      //       return state;
      //   };

      //   return {
      //     ...state,
      //     tables: {
      //       ...state.tables,
      //       [action.payload]: {
      //         rows: [],
      //         total: 0,
      //       },
      //     },
      //   };
      case 'ADD_ASSET':
        const { name, type} = action.payload;
        const {type: __, ...assetToAdd} = action.payload;

        if(!(type in state)) {
          return {
            ...state,
            [type]: {
               ...state[type],
               assets: [assetToAdd],
            }
          };
        };

        const currentAssetGroup = state[type].assets;

        if(currentAssetGroup.some((asset) => asset.name === name)) {
            return state;
        }

        const newAssetsState = [assetToAdd, ...currentAssetGroup];
        const withSumFuelds = addAssetsSum(newAssetsState);

        return {
          ...state,
          [type]: {
            ...state.type,
            assets: withSumFuelds,
          }
        };;

      case 'REMOVE_ASSET':
        if(!state[action.payload.type]) {
            return state;
        };

        if(!state[action.payload.type].assets.some((asset) => asset.name === action.payload.name)) {
            return state;
        }

        const filteredAssets = state[action.payload.type].assets.filter((asset) => asset.name !== action.payload.name)

        return {
          ...state,
          [action.payload.type]: {
            ...state[action.payload.type],
            assets: filteredAssets,
          }
        }
        
      default:
        return state;
    }
  }
