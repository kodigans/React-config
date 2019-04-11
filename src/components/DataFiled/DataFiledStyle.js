import styled from 'styled-components'
import sprite from '../../Svg/sprite.svg';

export const Label = styled.label`
    align-self: center;
    font-size: 25px;
    width: 100%;      
`;

export const Input = styled.input`    
  border: 0px;  
  flex: 1;
  background-color: #fff;  
  height: 24px;  
  font-size: 16px;   
  color: #425566;  
  margin: 0;
  padding: 0;
  padding-left: 5%;
  outline: none;
  &:focus{
    color: #2E3A46;
  }  
`;

export const WrapInput = styled.div`
    margin: 2% 0;
    background-color: #fff;
    padding: 5px 0px 5px 5px;
    display: flex;
    position: relative
    width: 100%; 
        
`;

export const Icon = styled.label`
    cursor: pointer;          
    display: block;
    content: " ";    
    height: 24px;    
    width: 24px;        
    position: relative;     
    background: url(${sprite}) no-repeat;
    background-position: 0 -24px;
    background-size: cover;
    background-color: #fff;
    &:hover{
        background-position: 0 0px; 
    }
`;