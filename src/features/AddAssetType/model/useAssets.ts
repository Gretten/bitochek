import { useReducer } from "react";
import { initialState, reducer } from "./state";

export const useAssets = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTable = (newTable) => {
        dispatch({ type: 'ADD_TABLE', payload: newTable });
    };

    return { state, addTable}
  
}