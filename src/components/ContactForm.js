import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Text = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
    span {
      display: block;
      margin: 0 0 0.5em 0;
    }
  }
`

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  input,
  textarea {
    font-family: inherit;
    font-size: inherit;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.primary};
    border-radius: 2px;
    padding: 1em;
    &::-webkit-input-placeholder {
      color: gray;
    }
    &::-moz-placeholder {
      color: gray;
    }
    &:-ms-input-placeholder {
      color: gray;
    }
    &:-moz-placeholder {
      color: gray;
    }
    &:required {
      box-shadow: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
  a {
    color: #0000EE;
  }
`

const Name = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Email = styled.input`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: ${props => props.theme.responsive.small}) {
    width: 49%;
  }
`

const Subject = styled.input`
  width: 100%;
  margin: 0 0 1em 0;
`

const Message = styled.textarea`
  width: 100%;
  margin: 0 0 1em 0;
  line-height: 1.6;
  min-height: 250px;
  resize: vertical;
`

const Submit = styled.input`
  background: ${props => props.theme.colors.primary} !important;
  color: white !important;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight} !important;
  }
`

const Modal = styled.div`
  background: white;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    min-width: inherit;
    max-width: 400px;
  }
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`

const Button = styled.div`
  background: ${props => props.theme.colors.primary};
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div>
        <Text>
          <p>
            Bewabon Shilling's work is available for sale or by commission. His work is represented by Roberts Gallery, Toronto; Darrell Bell Gallery, Saskatoon; The Collector's Gallery of Art, Calgary; and Lee Contemporary Art, Orillia.
          </p>
          <p>
            <span>Email: <a href="mailto:bewabonshilling@gmail.com">bewabonshilling@gmail.com</a></span>
            <span>Phone: <a href="tel:705-321-8578">705-321-8578</a></span>
          </p>
        </Text>
        <Form
          name="contact"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot"
          overlay={this.state.showModal}
          onClick={this.closeModal}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name="bot" onChange={this.handleInputChange} />
            </label>
          </p>
          <Name
            name="name"
            type="text"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <Email
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <Subject
            name="subject"
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            onChange={this.handleInputChange}
            required
          />
          <Message
            name="message"
            type="text"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleInputChange}
            required
          />
          <Submit name="submit" type="submit" value="Send" />

          <Modal visible={this.state.showModal}>
            <p>
              Thank you for reaching out. I will get back to you as soon as
              possible.
            </p>
            <Button onClick={this.closeModal}>Okay</Button>
          </Modal>
        </Form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
