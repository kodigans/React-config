import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { LoggerForm } from './components/LogerForm/LogerForm';


interface IAppProps {}
interface IAppState {}

class App extends  React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
    }

    public render() {
        return (
            <>
                <LoggerForm />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
