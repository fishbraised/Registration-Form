import { Component } from 'react';
import './index.css';

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameError: false,
    isLastNameError: false,
    isSubmit: false,
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { firstName, lastName } = this.state;

    if (!firstName) {
      this.updateFirstNameError();
    }

    if (!lastName) {
      this.updateLastNameError();
    }

    if (firstName && lastName) {
      this.updateSubmitTrue();
    }
  };

  renderForm = () => {
    const { firstName, lastName, isFirstNameError, isLastNameError } =
      this.state;

    return (
      <form onSubmit={this.onSubmitForm}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5569/5569750.png"
          alt="form logo"
        />

        <label htmlFor="firstNameInput">FIRST NAME</label>
        <input
          id="firstNameInput"
          onChange={this.updateFirstNameInput}
          onBlur={this.updateFirstNameError}
          value={firstName}
          type="text"
          placeholder="First name"
        />
        {isFirstNameError && <p>*Required.</p>}

        <label htmlFor="lastNameInput">LAST NAME</label>
        <input
          id="lastNameInput"
          onChange={this.updateLastNameInput}
          onBlur={this.updateLastNameError}
          value={lastName}
          type="text"
          placeholder="Last name"
        />
        {isLastNameError && <p>*Required.</p>}

        <button type="submit">Submit</button>
      </form>
    );
  };

  renderRegSuccess = () => {
    return (
      <div className="reg-success-con">
        <img
          src="https://res.cloudinary.com/saiuttej/image/upload/v1728925503/success-icon-img_we2eqa.png"
          alt="success tick img"
        />
        <h1>Submitted Successfully</h1>
        <button onClick={this.updateSubmitFalse}>
          Submit Another Response
        </button>
      </div>
    );
  };

  updateFirstNameError = (event) => {
    const { value } = event.target;
    this.setState({ isFirstNameError: !value });
  };

  updateLastNameError = (event) => {
    const { value } = event.target;
    this.setState({ isLastNameError: !value });
  };

  updateSubmitTrue = () => {
    this.setState({
      isSubmit: true,
    });
  };

  updateSubmitFalse = () => {
    this.setState({
      isSubmit: false,
      firstName: '',
      lastName: '',
      isFirstNameError: false,
      isLastNameError: false,
    });
  };

  updateFirstNameInput = (event) => {
    this.setState({ firstName: event.target.value });
  };

  updateLastNameInput = (event) => {
    this.setState({ lastName: event.target.value });
  };

  render() {
    const { isSubmit } = this.state;

    return (
      <main>
        <div className="content">
          <h1 className="title">Registration</h1>
          <div className="form-container">
            {isSubmit ? this.renderRegSuccess() : this.renderForm()}
          </div>
        </div>
      </main>
    );
  }
}

export default RegistrationForm;
