import React, { useState } from 'react'
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react'



const SignupForm = ({ submit, routerProps }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
   
    return (
        <>
        <Grid centered columns={2}>
          <Grid.Column>
             <Form
             size="large"
             onSubmit={e => {
                e.preventDefault();
                submit({ username, password, address})
                setUsername('')
                setPassword('')
                setAddress(' ') }}>
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-username'
                    control={Input}
                    label='Username'
                    placeholder='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-address'
                    control={Input}
                    label='Area'
                    placeholder='Area'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <Form.Field
                    id='form-input-control-address'
                    control={Input}
                    label='Password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                </Form.Group>
                <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Join Catz-Play'
                />
            </Form>
            <Message>
                    Have an account? <a onClick={() => routerProps.history.push("/login")}>Login</a>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    )
    
}

export default SignupForm