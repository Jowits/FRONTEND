import PropTypes from "prop-types";
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

export default class EmailForm extends Component {
  state = {
    feedback: "",
    formSubmitted: false
  };

  static sender = "catz_play@example.com";

  handleChange = event => {
    this.setState({
      feedback: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    debugger;

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  };

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
      .send("default_service", templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Last Name" value={this.props.receiver.email} />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              onChange={this.handleChange}
              value={this.state.feedback}
              name="text"
              placeholder="text"
            />
          </Form.Field>
          <Button value="Submit" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

EmailForm.propTypes = {
  env: PropTypes.object.isRequired
};
