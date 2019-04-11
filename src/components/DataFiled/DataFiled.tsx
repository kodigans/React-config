import * as React from 'react'; 

import { Label, Input, WrapInput, Icon } from './DataFiledStyle';

interface DataFiled {}

const DataFiled = ({}: DataFiled) => {
    return (
        <>            
            <Label> 
                Lorem ipsum
            </Label>
            <WrapInput>
                <Icon/>
                <Input type='text' placeholder='lorem ipsum'/>
            </WrapInput>
        </>
    )
};

export default DataFiled;