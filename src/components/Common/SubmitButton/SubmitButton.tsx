import * as React from 'react'; 

import { Submit } from './SubmitButtonStyle';

interface SubmitButton {}

const SubmitButton = ({}: SubmitButton) => {
    return(
        <Submit type='submit' value='Lorem ipsum'/>
    )
};

export default SubmitButton;