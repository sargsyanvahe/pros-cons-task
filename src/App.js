import React from 'react'
import './App.css';
import Block from "./components/Block/Block";

function App() {
    return (
        <div className="App centeredDiv">
            <div className='main-block'>
                <div className='header-block centeredDiv'>
                    Should i eat at McDonalds?
                </div>
                <div className='content-block'>
                  <Block title='PROS'/>
                  <Block title='CONS'/>
                </div>
            </div>
        </div>
    );
}

export default App;
