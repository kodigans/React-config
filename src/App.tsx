import * as React from 'react';
import * as ReactDOM from 'react-dom';
import RegistrationFormPresentational from './Components/RegistrationForm/RegistrationFormPresentational';
import ToolBar from "./Components/ToolBar/ToolBar";
import Option from  "./Components/ToolBar/Option/Option";
import NotificationPresentation from "./Components/Notification/Notification";
import { Fonts } from './Fonts/Fonts';
import EventForm from "./Components/EventForm/EventForm";

class App extends React.Component<{}, {}> {

    render() {

        return (
            <>
                <Fonts/>
                {/*<RegistrationFormPresentational/>*/}
                {/*<ToolBar/>*/}
                {/*<NotificationPresentation/>*/}
                <EventForm/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
