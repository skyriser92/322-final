import React from 'react';

class AddTask extends React.Component {
  state = { newAccount: ''};

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.newAccount);
    this.setState({ newAccount: ' '})

  };

  render() {
    return (
      <form className="task-input form-group" onSubmit={this.onFormSubmit}>
        <label htmlFor="newTask">Enter New Account</label>
        <input type="text" className="form-control"
               name="newTask"
               value={this.state.newAccount}
               onChange={(e) => this.setState({ newAccount: e.target.value })} />
               <input type="submit" />
      </form>
    );
  }
}

export default AddTask;