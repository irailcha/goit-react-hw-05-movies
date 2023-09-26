import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieDetailsStyle = styled.div`
display: flex;
gap: 50px;
padding: 50px 35px;
position: static;


`

export const MovieDataStyle = styled.div`
display: inline-block;
width: 600px;

`


export const StyleInfo = styled.span`
font-size: 20px;
`
export const StyleParaghraph = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 10px;

`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  border-style: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  padding: 5px;
  margin-left: 35px;
  position: absolute;
  top: 80px;
  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #939495;
    border: 2px solid #ccc;
    color: #fff;
  }
`;


export const StyleTitle = styled.h2`
font-size: 20px;
padding-left: 20px;
`


export const StyleLink = styled(Link)`

font-size: 15px;
padding-left: 20px;
padding-bottom: 10px;


`