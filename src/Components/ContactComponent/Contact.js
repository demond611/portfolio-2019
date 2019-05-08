import React, { Component } from  'react';
import {
  Header,
  Form,
  Input,
  Container,
  Modal,
  Button
} from                            'semantic-ui-react';
import FormErrors from            './FormErrors';

const style = {
  h1: {
    marginTop: '3em',
    fontSize: '2.5rem'
  },
  h3: {
    fontSize: '1.25em',
    marginBottom: '3em'
  }
};

class Contact extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      fullName: '',
      email: '',
      message: '',
      formErrors: {
        fullName: '',
        email: '',
        message: ''
      },
      emailValid: false,
      hasFullName: false,
      hasMessage: false,
      formValid: false,
      showModal: false
    };

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    }, () => {
      this.validateField(name, target.value)
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_TEMPLATEID: template
    } = process.env;

    this.sendFeedback(
      template,
      this.state.fullName,
      this.state.email,
      this.state.message,
      this.setState(this.initialState),
      this.setState({ showModal: true })
    );
  }

  validateField (fieldName, value){
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let hasFullName = this.state.hasFullName;
    let hasMessage = this.state.hasMessage;

    switch (fieldName){
      case 'fullName':
        hasFullName = value.length > 0;
        fieldValidationErrors.fullName = hasFullName ? "" : "Please enter your name.";
        break;
      case 'message':
        hasMessage = value.length > 0;
        fieldValidationErrors.message = hasMessage ? "" : "Please enter a message.";
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Please enter a valid email address.";
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      hasFullName: hasFullName,
      emailValid: emailValid,
      hasMessage: hasMessage

    }, this.validateForm);
  }

  validateForm (){
    this.setState({
      formValid: this.state.emailValid && this.state.hasFullName && this.state.hasMessage
    });
  }

  sendFeedback (templateID, senderName, senderEmail, message){
    window.emailjs.send(
      'mailgun',
      templateID,
      { senderName, senderEmail, message }
    ).then (response => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
  }

  close = () => {
    this.setState({ showModal: false });
  }

  renderHeading (){
    return (
      <Header as='h1'
        content="My personal email address where I can be contacted is demond611@gmail.com"
        style={style.h1} textAlign='center' />
    );
  }

  renderHeading2 (){
    return (
      <Header as='h3'
        content="Or I can be contacted using the form below"
        style={style.h3} textAlign='center' />
    );
  }

  render (){
    return (
      <section className="ui container">
        {this.renderHeading()}
        {this.renderHeading2()}
        <Container text>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>Name</label>
                <Input fluid placeholder='Name'
                  type="text"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <Input fluid placeholder='Email'
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange} />
              </Form.Field>
            </Form.Group>
            <Form.TextArea label='Message' placeholder='Message'
              name="message"
              value={this.state.message}
              onChange={this.handleChange} />
            <Form.Button primary
              disabled={!this.state.formValid}>Submit</Form.Button>
          </Form>
          <FormErrors formErrors={this.state.formErrors} />
          <div>
            <Modal open={this.state.showModal} size='mini'>
              <Modal.Content>
                <p>Email sent</p>
              </Modal.Content>
              <Modal.Actions>
                <Button primary
                  onClick={this.close}>Close</Button>
              </Modal.Actions>
            </Modal>
          </div>
        </Container>
      </section>
    );
  }
}

export default Contact;