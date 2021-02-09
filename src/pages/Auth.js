import React, { Component } from "react";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import { AuthFormContainer, Form, AuthContainer } from "./Styles";
import { connect } from "react-redux";
import * as actionType from "../store/actions/authAction";
import Spinner from "../components/UI/Spinner/Spinner";
import { Redirect } from "react-router-dom";
import { objectAssign } from "../utilities/objectAssign";

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 7,
          isEmail: null,
        },
        valid: false,
        touched: false,
      },
    },
    isSignedUp: true,
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= 6 && isValid;
    }

    if (rules.isEmail) {
      // eslint-disable-next-line
      const pattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputName) => {
    // const updatedAuthForm = {
    //   ...this.state.authForm,
    //   [inputName]: {
    //     ...this.state.authForm[inputName],
    //     value: event.target.value,
    //     valid: this.checkValidity(
    //       event.target.value,
    //       this.state.authForm[inputName].validation
    //     ),
    //     touched: true,
    //   },
    // };

    const updatedAuthForm = objectAssign(this.state.authForm, {
      [inputName]: objectAssign(this.state.authForm[inputName], {
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.authForm[inputName].validation
        ),
        touched: true,
      }),
    });
    this.setState({ authForm: updatedAuthForm });
  };

  submitHandler = (event) => {
    event.preventDefault();

    this.props.authFetchHandler(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignedUp
    );
  };

  siwtchOfModeHandler = () => {
    this.setState((prevState) => {
      return { isSignedUp: !prevState.isSignedUp };
    });
  };

  componentDidMount() {
    if (!this.props.building && this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirectPath();
    }
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.authForm) {
      formElementsArray.push({
        id: key,
        config: this.state.authForm[key],
      });
    }

    let formInputs = formElementsArray.map((formEl) => {
      return (
        <Input
          formnovalidate
          isValid={formEl.config.valid}
          touched={formEl.config.touched}
          key={formEl.id}
          elementType={formEl.config.elementType}
          elementConfig={formEl.config.elementConfig}
          change={(e) => this.inputChangedHandler(e, formEl.id)}
          value={formEl.config.value}
        />
      );
    });

    if (this.props.loading) {
      formInputs = <Spinner />;
    }

    let errorMessage = null;

    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <AuthContainer>
        {authRedirect}
        {errorMessage}
        <AuthFormContainer>
          {this.props.error ? (
            <p style={{ textTransform: "capitalize", color: "red" }}>
              {this.props.error.message.replace(/_/g, " ").toLowerCase()}
            </p>
          ) : (
            ""
          )}
          <Form noValidate onSubmit={this.submitHandler}>
            {formInputs}
            <Button success>
              {this.state.isSignedUp ? "LOGIN" : "REGISTER"}
            </Button>
          </Form>
          <Button danger clicked={this.siwtchOfModeHandler}>
            {this.state.isSignedUp
              ? "SWITCH TO REGISTER"
              : " SWITCH TO REGISTER"}
          </Button>
        </AuthFormContainer>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authState.token,
    userId: state.authState.userId,
    error: state.authState.error,
    loading: state.authState.loading,
    isAuthenticated: state.authState.token !== null,
    building: state.ings.building,
    authRedirectPath: state.authState.authRedirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authFetchHandler: (email, password, isSignUp) =>
      dispatch(actionType.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actionType.setAuthRedirectPath("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
