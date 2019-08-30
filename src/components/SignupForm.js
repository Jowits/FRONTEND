import React, { useState } from 'react'
import { Grid, Form, Input, Button, Message } from 'semantic-ui-react'



const SignupForm = ({ submit, routerProps, user }) => {
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
   
    React.useEffect(() => {
      if (user) routerProps.history.push("/");
    }, []);

    return (
        <>
        <Grid centered columns={2}>
          <Grid.Column>
             <Form
             size="large"
             onSubmit={e => {
                e.preventDefault();
                submit({ username, address, password})
                setUsername('')
                setAddress('') 
                setPassword('')}}>
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
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button color="blue" fluid size="large">
                Join Catz-Play
                </Button>
                </Form.Group>
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