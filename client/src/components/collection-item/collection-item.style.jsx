import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CustomButtonContainer = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`;


export const CollectionItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
&:hover{
    .image{
      opacity: 0.75;
    }
    ${CustomButtonContainer}{
        display: block;
        opacity: 0.85;
    }
  }
`;