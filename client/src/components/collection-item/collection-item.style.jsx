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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  .image {
    width: 100%;
    height: 95%;
    margin-bottom: 5px;
    opacity: 1;
    transition: opacity 0.5s ease-out;
  }
  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  
    .name {
      width: 90%;
      margin-bottom: 15px;
    }
  
    .price {
      width: 10%;
    }
  }

  &:hover{
    .image{
      opacity: 0.75;
    }
    ${CustomButtonContainer}{
        display: block;
        opacity: 0.85;
    }
  }
  @media screen and (max-width: 800px){
    width: 40vw;
    ${CustomButtonContainer}{
      display: block;
      opacity: unset;
      min-width: unset;
      padding: 0 10px;
    }
    &:hover{
      .image{
        opacity: unset;
      }
    }
  }
`;