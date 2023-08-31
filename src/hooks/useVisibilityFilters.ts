import { useReducer } from "react";

const initialState = {
  counter: false,
  timer: false,
  users: false,
};

type VisibilityFilter = typeof initialState;
type ActionType = "COUNTER" | "TIMER" | "USERS";
type Action = { type: ActionType; payload: { isEnabled: boolean }; };

const reducer = (state: VisibilityFilter, action: Action) => {
  switch(action.type) {
    case "COUNTER": {
      return { ...state, counter: action.payload.isEnabled };
    }
    case "TIMER": {
      return { ...state, timer: action.payload.isEnabled };
    }
    case "USERS": {
      return { ...state, users: action.payload.isEnabled };
    }
    default: throw new Error(`Unknown action type: ${action.toString()}`);
  }
};



export const useVisibilityFilters = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return useReducer(reducer, initialState);

};