import React, { useState } from "react";
import { Button, Form, Header, Segment, Grid } from "semantic-ui-react";

const LoginForm = ({ submit, routerProps, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (user) routerProps.history.push("/");
  }, []);

  return (
    <div className="inventory-body">
      <Grid columns={3}>
        <Grid.Column width={11}>
          <Header
            style={{
              fontSize: "5em",
              textAlign: "left",
              margin: "0.2em"
            }}
          >
            Catz-Play<i className="fas fa-cat"></i>
          </Header>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment
            style={{
              top: "6em",
              position: "relative",
              width: "15em",
              height: "20em",
              fontSize: "24px",
              textAlign: "center"
            }}
          >
            <Form
              error={{
                content: "Please enter your first name",
                pointing: "below"
              }}
              className="form"
              size="large"
              onSubmit={e => {
                e.preventDefault();
                submit({ username, password });
                setUsername("");
                setPassword("");
              }}
            >
              <Header
                style={{
                  fontSize: "1.8em",
                  textAlign: "center",
                  margin: "0.5em"
                }}
              >
                Let's play!
              </Header>
              <Form.Input
                style={{
                  height: "3em",
                  width: "15em"
                }}
                centered
                // error={{ content: 'Please enter your username', pointing: 'below' }}

                icon="user"
                iconPosition="left"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                style={{
                  height: "3em",
                  width: "15em"
                }}
                // error={{ content: 'Please enter your password', pointing: 'below' }}
                centered
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <Button
                style={{
                  fontSize: "1.5em",
                  height: "2em",
                  width: "6em",
                  textAlign: "center"
                }}
                color="orange"
                textAlign="center"
              >
                Login
              </Button>
            </Form>
            <Header
              style={{ fontSize: "1em", margin: "1.5em" }}
              textAlign="center"
            >
              Not registered yet?
            </Header>
            <Button
              style={{
                height: "2.2em",
                width: "7em",
                fontSize: "0.9em"
              }}
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
