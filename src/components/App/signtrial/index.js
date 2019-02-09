import React, { Component } from 'react'

class SignTrial extends Component {

  constructor() {
    super();
    this.state = {
      form: {
          username:'',
        email: '',
        password:''
      }
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    e.persist();
    let store = this.state;
    store.form[e.target.name] = e.target.value;
    this.setState(store);
  }

  submitHandler(e) { 

    const url = "http://localhost:9000/users"; 
         let headers = new Headers();
     
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
     
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
     
         headers.append('GET', 'POST');
         
         e.preventDefault();
         fetch(url, {
             headers: headers,
             method: 'POST',
             body: JSON.stringify(this.state.form) 
         })
    .then(console.log(this.state.form))
    .catch(() => console.log("Can’t access " + url + " response. "))
    this.props.history.push(`/login`)
  }

  render() {
    const { form } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <label>username</label><input name="username" type="text" value={form.username} onChange={this.changeHandler}/> <br></br>
        <label>email</label><input name="email" type="text" value={form.email} onChange={this.changeHandler}/> <br></br>
        <label>password</label><input name="password" type="password" value={form.password} onChange={this.changeHandler}/> <br></br>
        <input type="submit" name="submit" value="submit"/>
      </form>
    );
  }
}
export default SignTrial;
