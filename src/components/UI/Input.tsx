import React from 'react'
import styled from "styled-components";

interface InputProps {
    width: string;
    height: string;
    $bgColor: string;
    border?: string;
    $borderRadius: string;
    maxLength: string;
}
interface Props extends InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder?: string;
}

const InputText = styled.input<InputProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.$bgColor};
    border:  ${(props) => props.border ? props.border : "none"};
    border-radius: ${(props) => props.$borderRadius ? props.$borderRadius : "0"};
    outline: none;
    padding: 0 1rem;
    font-size: 1.6rem;
`
function Input({ onChange, ...props}: Props) {
    return ( 
        <InputText {...props} onChange={onChange}/>
    );
}

export default Input;