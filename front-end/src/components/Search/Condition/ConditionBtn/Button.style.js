import styled from 'styled-components';

const Button = styled.button`
    margin: 5px;
    margin-top: 30px;
    height: 40px;
    min-width: 60px;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => (props.isClicked ? '#008489' : 'lightgray')};
    cursor: pointer;
    outline: 0;
    font-size: 17px;
    color: ${(props) => (props.isClicked ? 'white' : 'black')};
    &:hover{
        background-color: ${(props) => (props.isClicked ? '#006C70' : '#BBB')};
        border: 1px solid ${(props) => (props.isClicked ? '#006C70' : '#BBB')};
    }
    background-color: ${(props) => (props.isClicked ? '#008489' : 'white')};
`;

export default Button;
