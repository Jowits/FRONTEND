import React, { useState } from "react";
import { Grid, Form, Input, Button, Message, Header } from "semantic-ui-react";

const SignupForm = ({ submit, routerProps, user }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (user) routerProps.history.push("/");
  }, []);

  return (
    <>
      <Grid centered columns={2}>
        <Grid.Column width={10}>
          <Header
            style={{
              fontSize: "3em",
              textAlign: "center",
              margin: "2em",
              color: "orange"
            }}
          >
            Add your details
          </Header>
          <Form
            style={{ heigth: "8em" }}
            size="large"
            onSubmit={e => {
              e.preventDefault();
              submit({ username, address, email, password });
              setUsername("");
              setAddress("");
              setEmail("");
              setPassword("");
            }}
          >
            <Form.Group widths="equal">
              <Form.Field
                style={{ fontSize: "1em" }}
                id="form-input-control-username"
                control={Input}
                label="Username"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <Form.Field
                style={{ fontSize: "1em" }}
                id="form-input-control-address"
                control={Input}
                label="Area"
                placeholder="Area"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
              <Form.Field
                style={{ fontSize: "1em" }}
                id="form-input-control-email"
                control={Input}
                label="Email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Field
                style={{ fontSize: "1em" }}
                id="form-input-control-password"
                control={Input}
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              style={{
                fontSize: "1.5em",
                textAlign: "center",
                width: "37.2em"
              }}
              flui
              size="large"
            >
              Join Catz-Play
            </Button>
          </Form>
          <Message
            style={{ fontSize: "1.5em", textAlign: "center", width: "42.5em" }}
          >
            Have an account?{" "}
            <a
              style={{ color: "orange", margin: "1em" }}
              onClick={() => routerProps.history.push("/login")}
            >
              Login
            </a>
          </Message>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignupForm;
