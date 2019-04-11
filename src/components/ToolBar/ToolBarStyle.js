import styled from 'styled-components'

export const ToolBarPanel = styled.div`
  display: flex;
  flex-flow: column wrap  
  width: 50px;
  background-color: #2e3b46;
  border-right: 1px solid #3b4d5c;
  padding 0.5% 0;
`;

export const MainOption = styled.div`
    flex: 0 1;
`;

export const NewTask = styled.div`
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid black;       
    flex: 1 1;
`;

export const Setting = styled.div`
  //  height: auto
  flex: 0 1; 
`;