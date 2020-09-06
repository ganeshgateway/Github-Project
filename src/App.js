import React, { Component } from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./Store";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Container from 'Container';

// Configure toast
toast.configure();

// Connect to store
const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default (App); 
