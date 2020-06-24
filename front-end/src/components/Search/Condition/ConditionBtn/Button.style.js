import styled from 'styled-components';

const Button = styled.button`
    margin: 5px;
    height: 40px;
    min-width: 60px;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => (props.isClicked ? '#008489' : 'lightgray')};
    cursor: pointer;
    outline: 0;
    font-size: 17px;
    color: ${(props) => (props.isClicked ? 'white' : 'black')};
    &:hover{
        background-color: ${(props) => (props.isClicked ? '#006C70' : '#F2F2F2')};
        border: 1px solid ${(props) => (props.isClicked ? '#006C70' : '#F2F2F2')};
    }
    background-color: ${(props) => (props.isClicked ? '#008489' : 'white')};
`;

export default Button;
