import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

const LoginForm = ({ submit, routerProps, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  React.useEffect(() => {
    if (user) routerProps.history.push("/");
  }, []);

  return (
    <div className="inventory-body">
      <Header
        style={{
          fontSize: "6em",
          textAlign: "left",
          margin: "0.2em"
        }}
      >
        Catz-Play<i className="fas fa-cat"></i>
      </Header>
      <Segment
        style={{
          position: "relative",
          left: "78em",
          width: "20em",
          height: "30em",
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
              fontSize: "2.5em",
              textAlign: "center",
              margin: "1em"
            }}
          >
            Let's play!
          </Header>
          <Form.Input
            style={{
              height: "5em",
              width: "25em"
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
              height: "5em",
              width: "25em"
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
              height: "2.7em",
              width: "9em",
              margin: "1em"
            }}
            color="orange"
            textAlign="center"
          >
            Login
          </Button>
        </Form>
        <Header
          style={{ fontSize: "1.2em", margin: "1.5em" }}
          textAlign="center"
        >
          Not registered yet?
        </Header>
        <Button
          style={{
            height: "3em",
            width: "10em",
            margin: "1em"
          }}
          onClick={() => routerProps.history.push("/signup")}
          color="orange"
        >
          Sign Up
        </Button>
      </Segment>
    </div>
  );
};
export default LoginForm;
