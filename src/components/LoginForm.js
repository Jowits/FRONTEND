import React, { useState } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
  } from 'semantic-ui-react';



const LoginForm = ({ submit, routerProps }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    return (
      <>
        <Grid centered columns={2}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment>
              <Form 
                size="large"
                onSubmit={e => {
                e.preventDefault();
                submit({ username, password})
                setUsername('')
                setPassword('') }}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Form>
            </Segment>
            <Message>
              Not registered yet? <a onClick={() => routerProps.history.push("/signup")}>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </>
    )

}

export default LoginForm