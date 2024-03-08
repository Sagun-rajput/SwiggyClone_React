import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';

const AppComponent = () =>(
    <div className="app">
        <Header />
        <Body/>
    </div>
)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)