import React, { useState } from 'react'
import {
    Button,
    Form,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react';



const LoginForm = ({ submit, routerProps }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
   
    return (
        <body  class="inventory-body">
         <Grid columns={6}r>
            <Grid.Column>
                <Header className="logo" >
                    Catz-Play
                </Header>
                <Segment className="segment">
                <Form className="form"
                    size="large"
                    onSubmit={e => {
                    e.preventDefault();
                    submit({ username, password})
                    setUsername('')
                    setPassword('') }}>
                    <Header as="h1" textAlign="center">
                    Let's start the fun!
                    </Header>
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
                    <Button color="orange" >
                    Login
                    </Button>
                </Form>
                <Header as="h1" textAlign="center">
                Not registered yet? 
                </Header>
                <Button onClick={() => routerProps.history.push("/signup")} color="orange">
                Sign Up
                </Button>
                </Segment>
            </Grid.Column>
          </Grid>
        </body>
   
    )

}

export default LoginForm