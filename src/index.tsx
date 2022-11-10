import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./test-useeffect/App";
import App6 from "./App6";
import App7ReduxCore from "./App7ReduxCore";
import App8ReactRedux from "./App8ReactRedux";
import {Provider} from "react-redux";
// import store from "./react-redux-demo/react-redux-app";
import App9ReactRedux from "./App9ReduxToolkit";
import store from "./redux-toolkit/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App9ReactRedux/>
          {/*<App8ReactRedux />*/}
          {/*<App7ReduxCore/>*/}
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
