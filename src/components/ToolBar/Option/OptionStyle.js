import styled from 'styled-components'
import sprite from '../../../Svg/sprite.svg';

export const Option__Link = styled.a`
    width: 50px;    
    height: 50px;
    background-color: inherit;            
`;

export const Span = styled.span`
    cursor: pointer;          
    display: block;
    content: " ";
    margin: 0 auto;    
    height: 40px;    
    width: ${props => props.theme.size};          
    position: relative;     
    background: url(${sprite}) no-repeat;
    background-position: 0 ${props => props.theme.slipDown};
    background-size: cover;
    background-color: inherit;
`;