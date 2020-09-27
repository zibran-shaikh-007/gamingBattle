import React from "react";
import ReactDOM from "react-dom";
import App from "./App"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { rootReducer } from "./components/redux/reducers/rootReducer";
import { Provider } from 'react-redux'


let loginStatus = () => {
    
    if (localStorage.getItem('User')) {
      return true;
    }
    else {
      return false;
    }
  }
  
  const initialStates = {
    auth: {
      loggedIn: loginStatus(),
      
    }
  };
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(rootReducer,initialStates, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));

