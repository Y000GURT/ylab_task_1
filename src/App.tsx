import React from 'react'
import AuthForm from "./components/AuthForm"
import styled from "styled-components"

const AppWrapper = styled.div`
  height: 100%;
  background-color: #f3f8ff;

  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {

  return (
    <AppWrapper>
      <AuthForm />
    </AppWrapper>
  )
}

export default App
