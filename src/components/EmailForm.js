import PropTypes from "prop-types";
import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

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
        }).then(alert("Message send!"));
      })
      // Handle errors here however you like
      .catch(err => console.error("Failed to send feedback. Error: ", err));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Receiver</label>
            <input
              disabled
              placeholder="Username"
              value={this.props.receiver.username}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              disabled
              placeholder="Receiver"
              value={this.props.receiver.email}
            />
          </Form.Field>
          <Form.Field>
            <Form.TextArea
              onChange={this.handleChange}
              value={this.state.feedback}
              name="text"
              placeholder="Play-date time!"
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
