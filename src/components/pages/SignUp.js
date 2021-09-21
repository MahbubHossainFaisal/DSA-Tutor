import React from 'react'
import Illustration from '../ui/Illustration'
import SignUpForm from '../Form/inputFields/SignUpForm'
const SignUp = () => {
    return (
        <React.Fragment>
            <h1>Create an account</h1>
            
            <div className="column">
                <Illustration />
                <SignUpForm />
            </div>
        </React.Fragment>
    )
}

export default SignUp
