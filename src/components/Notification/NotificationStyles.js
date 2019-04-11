import styled from 'styled-components';
import slim from './slim.jpg';
import kit from './KIT.png';


export const Notification = styled.section`    
    display: block;
    font-family: 'Avenir', sans-serif;
    position: absolute;
    left: 50px;
    top: 10px;
    min-width: 160px;
    width: 416px;
    min-height: 461px;
    margin: 2px auto;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-clip: padding-box;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 1000;
    letter-spacing: 0;
    text-transform: none;
    overflow: hidden
`;

export const Header = styled.header`
background-color: #fafafb;
    font-family: 'Avenir', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: 13px;
    line-height: 35px;
    border-bottom: 1px solid #e9ebef;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #555;
    text-align: left;
    padding: 0px 25px;    
    display: flex;    
    align-items: center;
`;

export const NotificationCard = styled.div`
    align-items: center;
    display: flex;
    padding: 10px 25px;
    padding-right: 5px;
    text-align: left;
    color: #85898c;
    line-height: 12px;
    margin: 0;
    border-bottom: 1px solid #eee;
    height: 83px;
    width: 413px;
`;

export const GreetingUser = styled.div`
  font-size: 18px;
  line-height: 28px;
  color: #303030;
  font-weight: 600;
  margin-bottom: 4%;
  font-family: Avenir;
`;

export  const NotificationBodyMessage = styled.div`
    font-size: 13px;
    font-weight: 900;
    line-height: 18px;
    color: #9b9b9b;
    margin-top: 4px;
`;

export  const NotificationBody = styled.div `
    width: 65%;
`;

export const NotificationWeather = styled.div `
    background-image: url(${slim});
    background-size: cover;
    height: 52px;
    width: 52px;
    margin: 0;
    border: none;
`;

export  const ListIcon = styled.p`
  margin: 0;  
  &::before {
    content: '';
    background-image: url(${kit});
    background-size: contain;    
    background-position: 100% 100%;
    background-repeat: no-repeat;    
    width: 50%;
    margin: 3% auto 0;    
    height: 135px;
    display: block;
    opacity: 1;
  }
  &::after {
    display: block;
    content: 'No action items right now. Enjoy the day!';
    font-family: 'Avenir', sans-serif;
    color: #808080;
    text-align: center;
    font-size: 16px;
    opacity: 0.9;
    line-height: 24px;
    margin: auto;
    max-width: 200px;
    margin-bottom: 32.5px;
} 
`;