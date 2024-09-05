import React, { useEffect, useState, useRef } from 'react'
import styled from "styled-components";
import Input from "./UI/Input";
import Button from "./UI/Button";
import useSubmitData from "../hooks/useSubmitData";

const AuthFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
`
const AuthFormContent = styled.form`
    height: auto;
    width: 400px;
    border-radius: 10px;
    background-color: #c5e8fc;
    font-size: 1.6rem;
    padding: 1.8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.5rem;
`
const AuthFormSignUP = styled.a`
    color: #bcbcbc;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    align-self: flex-end;

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: #b0b0b0;
        transition: width 0.3s ease;
    }
    &:hover::after {
        width: 100%;
    }
    &:hover {
        color: #b0b0b0;
    }
`
const ListErrors = styled.ul`
    list-style: none;
`
const ItemError = styled.li`
    color: #ff5050;
    font-size: 1.4rem;
`
function AuthForm() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const { submitData } = useSubmitData();
    const isFirstRender = useRef(true);
    const errorEmail = 'Некорректная почта'
    const errorPasswordLength = 'Пароль меньше 6 символов'
    const errorPasswordAlphabet = 'Пароль должен содержать только латинские символы'

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return
        }

        let regexEmail = /^\S+@\S+\.\S+$/;
        let regexPasswordLatin = /^[a-zA-Z0-9]+$/;

        let newErrors: string[] = [];

        if (!regexEmail.test(email)) {
            newErrors.push(errorEmail);
        }

        if (password.length < 6) {
            newErrors.push(errorPasswordLength);
        }

        if (!regexPasswordLatin.test(password)) {
            newErrors.push(errorPasswordAlphabet);
        }

        setErrors(newErrors);
    }, [email, password])

    function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }
    
    function handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }
    
    function handleClickSubmit(e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        if (errors.length === 0) {
            submitData()
        }
    }

    return ( 
        <AuthFormContainer>
            <AuthFormContent onSubmit={handleClickSubmit} noValidate onBlur={() => setErrors([])}>

                <Input 
                    type='email' 
                    placeholder='Почта' 
                    maxLength='200' 
                    onChange={handleChangeEmail} 
                    width='100%' 
                    height='4rem' 
                    $bgColor='#f3f8ff' 
                    $borderRadius='10px'>
                </Input>
                <Input 
                    type='password' 
                    placeholder='Пароль' 
                    maxLength='200' 
                    onChange={handleChangePassword} 
                    width='100%' 
                    height='4rem' 
                    $bgColor='#f3f8ff' 
                    $borderRadius='10px'>
                </Input>

                {
                    errors.length > 0 
                    ?
                    <ListErrors>
                        {errors.map((error) => <ItemError key={error}>{error}</ItemError>)}
                    </ListErrors>
                    : 
                    null
                }
                <Button width='100%' height='4rem' $bgColor='#6bb5ff' onClick={handleClickSubmit} color='white' $borderRadius='10px'>Войти</Button>

            </AuthFormContent>
            <AuthFormSignUP>Зарегистрироваться</AuthFormSignUP>
        </AuthFormContainer>
     );
}

export default AuthForm;