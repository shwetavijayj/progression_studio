import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from './actions';
import axios from 'axios';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
  }

  onChangeUsername = e => {
    this.setState({ userName: e.target.value });
  };
  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };

  onClickEnter = () => {
    let userDetails = {
      userName: this.state.userName,
      password: this.state.password
    };
    const config = {
      headers: {
        'content-type': 'application/json'
      },
      mode: 'cors'
    };
    axios
      .post('http://localhost:3001/users/login', userDetails, config)
      .then(res => {
        alert('hi');
        console.log('response', res);
      })
      .catch(err => {
        console.log('error', err);
      });
    // this.props
    //   .userLogin(userDetails)
    //   .then(() => {
    //     console.log('success');
    //   })
    //   .catch(() => {
    //     console.log('fail');
    //   });
  };
  render() {
    return (
      <div>
        <form>
          Enter username:
          <input
            type='text'
            value={this.state.userName}
            onChange={this.onChangeUsername}
          />
          <br />
          Enter password:
          <input
            type='password'
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <br />
          <button name='submit' onClick={this.onClickEnter}>
            Enter
          </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   // map your state here
// };
// const mapDispatchToProps = dispatch => {
//   bindActionCreators({ ...loginActions }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;
