
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
    let mission: string = 'Mission completed';

    return (
        <h1>
            {mission}
        </h1>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));