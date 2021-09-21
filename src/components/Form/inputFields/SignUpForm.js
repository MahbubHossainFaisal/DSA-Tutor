import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import {Link,useHistory } from 'react-router-dom'
import Button from '../Button'
import Form from '../Form'
import CheckBox from './CheckBox'
import TextInput from './TextInput'


const SignUpForm = () => {

    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [agree,setAgree] = useState("")
    const [error,setError] = useState()
    const [loading,setLoading] = useState()
    const {signup} = useAuth()
    const history = useHistory()

    async function submitHandler (e) {
        e.preventDefault();

        if(password !== confirmPassword){
            return setError('Passwords did not match!')
        }

        try{
            setError('')
            setLoading(true)
            await signup(email,password,username)
            history.push('/')

        }catch(err){
            console.log(err)
            setLoading(false)
            setError('Failed to create an account!')
        }
    }

    return (
        <Form  style={{ height: '500px' }} onSubmit={submitHandler} >
                    <TextInput required type="text" placeholder="Enter Name" icon="person"
                        value={username} onChange={(e) => setUsername(e.target.value)} />

                    <TextInput required type="text" placeholder="Enter Email" icon="alternate_email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                    <TextInput required type="password" placeholder="Enter Password" icon="lock"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                    <TextInput required type="password" placeholder="Confirm Password" icon="lock_clock"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    <CheckBox required
                    text="I agree to the Terms &amp; Conditions"
                    value={agree} onChange={(e) => setAgree(e.target.value)} />
                    
                    <Button disabled={loading} type='submit'>
                       <span> Submit Now </span>
                    </Button>
                        {error && <p className="error"> {error} </p>}
                    
        </Form>
    )
}

export default SignUpForm
