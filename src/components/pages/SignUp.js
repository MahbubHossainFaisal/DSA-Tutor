import React from 'react'
import Illustration from '../Illustration'
import Form from '../Form'
import TextInput from '../inputFields/TextInput'
import classes from '../../styles/SignUp.module.css'
import CheckBox from '../inputFields/CheckBox'
import Button from '../Button'

const SignUp = () => {
    return (
        <React.Fragment>
            <h1>Create an account</h1>
            
            <div className="column">
                <Illustration />
                <Form  className={`${classes.signup}`}>
                    <TextInput type="text" placeholder="Enter Name" icon="person"/>
                    <TextInput type="text" placeholder="Enter Email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="Enter Password" icon="lock"/>
                    <TextInput type="password" placeholder="Confirm Password" icon="lock_clock"/>
                    <CheckBox
                    text="I agree to the Terms &amp; Conditions"
                    />
                    <Button>
                        Submit Now
                    </Button>

                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </React.Fragment>
    )
}

export default SignUp
