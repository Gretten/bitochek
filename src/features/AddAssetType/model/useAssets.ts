import { useReducer } from "react";
import { initialState, reducer } from "./state";

export const useAssets = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTable = (newTable) => {
        dispatch({ type: 'ADD_TABLE', payload: newTable });
    };

    const addAsset = (asset) => {
        dispatch({ type: 'ADD_ASSET', payload: asset });
    }

    const removeAsset = (asset) => {
        dispatch({ type: 'REMOVE_ASSET', payload: asset });
    }

    return { assets: state, addTable, addAsset, removeAsset }
  
}