import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LoggerForm } from './components/LogerForm/LogerForm';

interface ICountry {
    county: string
}
interface IProps {
    //hits: number
}
interface IState {
    hits: Array<ICountry>;
}

class App extends React.Component<{}, IState> {
    state = {
        hits: []
    }


    componentDidMount() {
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              country: '1',              
            }),
          };

        fetch('/', options)
            .then(res => res.text())
            .then(data => JSON.parse(data))
            .then(arr => {
                console.log(arr);
                this.setState({hits: arr});                
            })
    }
    

    public render() {   
    const {hits} = this.state;     
        return (
            <>            
      <ul>
      {hits.map(user => {        

        return (
          <h1> {`${user.name} ${user.fullName}`} </h1>
        );
      })}
      </ul>
                <LoggerForm />
            </>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
