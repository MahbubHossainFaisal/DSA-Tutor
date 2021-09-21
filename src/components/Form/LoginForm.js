import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from './Button'
import Form from './Form'
import TextInput from './inputFields/TextInput'

const LoginForm = () => {

    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState()
    const [loading,setLoading] = useState()
    const {login} = useAuth()
    const history = useHistory()

    async function submitHandler (e) {
        e.preventDefault();

        try{
            setError('')
            setLoading(true)
            await login(email,password)
            history.push('/')

        }catch(err){
            console.log(err)
            setLoading(false)
            setError('Failed to login!')
        }
    }

    return (
          <Form style={{ height: '330px' }} onSubmit={submitHandler} >
           <TextInput required type="text" placeholder="Enter Email" icon="alternate_email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />

           <TextInput required type="password" placeholder="Enter Password" icon="lock"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

          <Button disabled={loading} type='submit'>
                    <span> Submit Now </span>
          </Button>

          <div className="info">
            Don't have an account? <Link to="/signup">Signup</Link> instead.
          </div>
          {error && <p className="error"> {error} </p>}
        </Form>
    )
}

export default LoginForm
