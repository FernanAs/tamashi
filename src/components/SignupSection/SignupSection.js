import React, { useState } from 'react';
import {createGlobalStyle, css} from 'styled-components';
import { Button } from '../../globalStyles';
import {
    FormWrapper,
    Form,
    Input,
    TextArea,
    Fieldset,
    Error
} from './SignupSection.elements.js';

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  height: 100%;
  margin: 0;
  color: #555;
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


 const initialState = {
    name: '',
    email: '',
    message: '',
    gender: '',
 }

const SignupSection = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submitted!');
        console.log(state);

        for (let key in state) {
            if (state[key] === '') {
                setError(`You must provide the ${key}`)
                return
            }
        }
        setError('');
    }

    const handleInput = e => {
        const inputName = e.currentTarget.name;
        const value = e.currentTarget.value;

        setState(prev => ({ ...prev, [inputName]: value}))

    };

    return (
        <>
        <GlobalStyle />
           <FormWrapper>
               <Form onSubmit={handleSubmit}>
                   <h2>Tell Us About Our Food</h2>
                   <label htmlFor="name">Name</label>
                   <Input 
                   type="text" 
                   name="name" 
                   value={state.name} 
                   onChange={handleInput}
                   />
                   <label htmlFor="email">Email</label>
                   <Input 
                   type="email" 
                   name="email" 
                   value={state.email} 
                   onChange={handleInput}
                   />
                   <Fieldset>
                       <legend>Gender</legend>
                       <label>
                        <input 
                        type="radio" 
                        value="female" 
                        name="gender" 
                        checked={state.gender === 'female'}
                        onChange={handleInput}
                        />
                        Female
                       </label>
                       <label>
                           <input 
                           type="radio" 
                           value="male" 
                           name="gender"
                           checked={state.gender === 'male'}
                           onChange={handleInput}
                           />
                           Male
                       </label>
                   </Fieldset>
                    <label htmlFor="message">Message</label>
                    <TextArea 
                    name="message" 
                    value={state.message} 
                    onChange={handleInput}
                    />
                    {error && (
                        <Error>
                        <p>{error}</p>
                        </Error>
                    )}
                    <Button type="submit">Send Message</Button>
               </Form>
           </FormWrapper>
        </>
    )
}


export default SignupSection