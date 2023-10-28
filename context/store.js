import { createContext, useReducer, useEffect } from 'react';





const initialState = {
  header: {
    active: false,
    global: false
  }
}


const store = createContext(initialState);
const { Provider } = store;



const StateProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      // Samples
      case 'sample action #1':
        const newState = { ...state, viewport: { ...state.viewport, center: action.value } }// do something with the action
        return newState;
      case 'sample action #2':
        return {...state, viewport: { ...state.viewport, center: action.value }};

    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }