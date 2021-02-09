import React, { Component } from "react";
import Modal from "../UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(
        (req) => {
          return req;
        },
        (err) => {
          this.setState({ error: null });
        }
      );

      this.responseInterceptors = axios.interceptors.response.use(
        (response) => {
          return response;
        },
        (err) => {
          this.setState({ error: err.message });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptors);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error : null}
          </Modal>
          <WrappedComponent {...this.props}>{this.props}</WrappedComponent>
        </>
      );
    }
  };
};
export default withErrorHandler;
