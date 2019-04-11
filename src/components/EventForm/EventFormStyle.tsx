import styled from 'styled-components';

export const  EventFormWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    width: 400px;
    height: 300px;
    background: white;    
    bottom: inherit !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    border: 1px solid #c8c7cc;
    border-radius: 4px;
    opacity: 1;    
    overflow: hidden;
`;

export const EventMainWrap = styled.div`
    display: flex; 
    width: 100% - 40px;   
    padding: 20px 20px;
    padding-bottom: 0;     
`;

export const EventTitle = styled.input`
    width: 100%; 
    font-family: 'Avenir';
    background-color: inherit;
    color: #555;
    font-size: 18px;
    padding: 2px 0;
    border: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #eee;
    outline: none;
    &::placeholder {
        color: #E1E1E1;
    }
`;

export const EventAccept = styled.div`
    display: flex; 
    width: 100%;    
`;
