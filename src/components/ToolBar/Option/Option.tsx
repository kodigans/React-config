import * as React from 'react';

import {Option__Link, Span} from "./OptionStyle.js";

interface OptionProps {
    theme: any;
    //slipDown: string;
}

const Option = ({theme}: OptionProps) => {
    return (
        <Option__Link>
            <Span theme={theme}/>
        </Option__Link>
    )
};

export default Option;