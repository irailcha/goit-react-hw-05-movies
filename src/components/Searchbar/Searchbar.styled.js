import styled from 'styled-components';


  
  
    export const SearchFormInput = styled.input` 
        display: inline-block;
        
        padding: 5px;
        font: inherit;
        border: 2px solid #ccc;
        outline: none;
        padding-left: 4px;
        padding-right: 4px;

        &::placeholder {
            font: inherit;
            font-size: 18px;
          }
     `

     export const SearchForm= styled.form`
     padding: 20px;

     `

     export const SearchButton = styled.button`
  
  cursor: pointer;
  border-style: none;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 5px;
  width: 100px;
  margin-left: 20px;
  

  transition-property: background-color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #939495;
    border: 2px solid #ccc;
  }
`;