import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginForm = ({ submit, routerProps, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (user) routerProps.history.push("/");
  }, []);

  return (
    <div className="inventory-body">
      <Grid className="inventory-body" columns={6}>
        <Grid.Column>
          <Header className="logo">Catz-Play</Header>
          <Segment className="segment">
            <Form
              error={{ content: 'Please enter your first name', pointing: 'below' }}
              className="form"
              size="large"
              onSubmit={e => {
                e.preventDefault();
                submit({ username, password });
                setUsername("");
                setPassword("");
              }}
            >
              <Header as="h1" textAlign="center">
                Let's start the fun!
              </Header>
              <Form.Input
                // error={{ content: 'Please enter your username', pointing: 'below' }}
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                // error={{ content: 'Please enter your password', pointing: 'below' }}
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button color="orange">Login</Button>
            </Form>
            <Header as="h1" textAlign="center">
              Not registered yet?
            </Header>
            <Button
              onClick={() => routerProps.history.push("/signup")}
              color="orange"
            >
              Sign Up
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default LoginForm;
