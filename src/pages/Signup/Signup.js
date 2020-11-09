import React from 'react'
import { homeObjFour } from './Data';
import { SignupSection } from '../../components';


const Signup = () => {
    return (
        <>
            <SignupSection {...homeObjFour}/>
        </>
    )
}

export default Signup;