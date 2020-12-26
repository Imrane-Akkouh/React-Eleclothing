import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
min-width: 30%;
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
margin: 0 7.5px 15px;
background-position: center;
background-size: cover;
overflow: hidden;

${props => { console.log(props.large); return props.large ? 'height:340px;' : 'height: 240px;' }}

&:first-child{
    margin-right: 7.5px;
}

&:last-child{
    margin-left: 7.5px;
}

&:hover{
    cursor: pointer;
    
    & .background-image{
        transform: scale(1.1);
        opacity: 0.8;
        transition: transform 5s cubic-bezier(0.25, 0.45, 0.45, 0.95), opacity 0.5s linear;
    }

    & .category-content{
        opacity: 0.9;
    }
}

.background-image{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

.category-content{
    height: 90px;
    width: 110px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    opacity: 0.7;
    position: absolute;
}

.title{
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
}

.subtitle{
    font-weight: lighter;
    font-size: 16px;
}
@media screen and (max-width: 800px){
    height: 200px;
}
`