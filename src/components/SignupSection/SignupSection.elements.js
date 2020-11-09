import styled, { createGlobalStyle, css } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: black;
}
`;


export const SharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;


export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    padding-bottom: 20px;
  }

`;

export const Input = styled.input`
  display: block;
  width: 100%;
  ${SharedStyles}
`;

export const TextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${SharedStyles}
`;

export const Button = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: .9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label { 
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

export const Error = styled.div`
color: red;
font-weight: 800;
margin: 0 0 40px 0;
`;