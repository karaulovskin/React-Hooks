import React from 'react';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="container pt-4yarn">
                <Home/>
            </div>
        </React.Fragment>
    );
}

export default App;
