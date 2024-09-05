import React from 'react'
import styled from "styled-components";

interface ButtonProps {
    width: string;
    height: string;
    $bgColor: string;
    border?: string;
    $borderRadius?: string;
    color: string;
}
interface Props extends ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
}
const ButtonContainer = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.$bgColor};
    color: ${(props) => props.color};
    border:  ${(props) => props.border ? props.border : "none"};
    border-radius: ${(props) => props.$borderRadius ? props.$borderRadius : "0"};
    outline: none;
    padding: 0 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        filter: brightness(96%);
    }
`

function Button({children, onClick, ...props}: Props) {
    return ( 
        <ButtonContainer onClick={onClick} {...props}>
            { children }
        </ButtonContainer>
    );
}

export default Button;