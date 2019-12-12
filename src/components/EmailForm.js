import PropTypes from "prop-types";
import React, { Component } from "react";
import { Form, Button, Grid, Header } from "semantic-ui-react";

export default class EmailForm extends Component {
  state = {
    feedback: "",
    formSubmitted: false
  };

  static sender = "catzPlay7@gmail.com";

  handleChange = event => {
    this.setState({
      feedback: event.target.value
    });
  };
  //using EmailJS to send email to other user
  handleSubmit = event => {
    event.preventDefault();
    console.log(process.env);

    const {
      //   REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = process.env;

    this.sendFeedback(
      template,
      this.props.user.email,
      this.props.receiver.email,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  };

  sendFeedback(templateId) {
    let template_params = {
      reply_to: this.props.user.email,
      from_name: this.props.user.username,
      to_name: this.props.receiver.username,
      message_html: this.state.feedback
    };

    window.emailjs
      .send("gmail", templateId, template_params, "user_vB22KBqPVH1Jhmf28msL7")
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      .then(alert("Message send!"))
      .then(this.props.history.push("/"))
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  render() {
    return (
      <>
        <Grid centered columns={2}>
          <Grid.Column>
            <Form onSubmit={this.handleSubmit}>
              <Header
                style={{ fontSize: "3em", width: "17em" }}
                color="orange"
                dividing
              >
                {" "}
                Catz-play time!
              </Header>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Receiver
                </label>
                <input
                  style={{ fontSize: "1.5em", margin: "0.5em" }}
                  disabled
                  placeholder="Username"
                  value={this.props.receiver.username}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ fontSize: "1.5em", margin: "0.5em" }}>
                  Play-date time!
                </label>
                <Form.TextArea
                  style={{ fontSize: "1.5em", margin: "0.5em" }}
                  onChange={this.handleChange}
                  value={this.state.feedback}
                  name="text"
                  placeholder="Play-date time!"
                />
              </Form.Field>
              <Button
                style={{
                  fontSize: "1.8em",
                  paddingBottom: "0.5em",
                  marginLeft: "0.55em",
                  width: "6em",
                  height: "2em"
                }}
                value="Submit"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

EmailForm.propTypes = {
  env: PropTypes.object.isRequired
};
