import * as React from 'react';

import { ToolBarPanel, Setting, NewTask, MainOption } from './ToolBarStyle';
import Option from './Option/Option';

interface ToolBarProps {}

const ToolBar = ({  }: ToolBarProps) => {
  return (
    <ToolBarPanel>
      <MainOption>
        <Option theme={{slipDown: '-180px', size: '20px'}}/>
        <Option theme={{slipDown: '-120px', size: '40px'}}/>
        <Option theme={{slipDown: '-210px', size: '40px'}}/>
        <Option theme={{slipDown: '-300px', size: '40px'}}/>
      </MainOption>

      <NewTask>
        <Option theme={{slipDown: '-400px', size: '35px'}}/>
      </NewTask>

      <Setting>
        <Option theme={{slipDown: '-320px', size: '40px'}}/>
        <Option theme={{slipDown: '-360px', size: '40px'}}/>
      </Setting>
    </ToolBarPanel>
  );
};

export default ToolBar;
