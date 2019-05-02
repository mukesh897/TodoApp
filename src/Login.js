import React from 'react';
import { Link, browserHistory } from 'react-router';
import ls from 'local-storage'
import  { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    ls.set('validUser1', 'validUserPassword1');
    ls.set('validUser2', 'validUserPassword2');
    ls.set('validUser3', 'validUserPassword3');
    ls.set('isUserAuthenticated', false)
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    const passwordFromDB = ls.get(email) || 'none'

    if (password === passwordFromDB) {
      console.log(passwordFromDB)
      ls.set('isUserAuthenticated', true)
      browserHistory.replace('/app')

      // return <Link to="/app">Have an account?</Link>
    } else {
      debugger;
      document.getElementById("invalidPassword").style.display = "block";
    }
  }
  render() {
    return (
      <div>
        <h1>Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Login</button>
        </form>
        <div id="invalidPassword" hidden={true}>
            Sorry, this the userId and password combination do not exist
        </div>
      </div>
    );
  }
}
