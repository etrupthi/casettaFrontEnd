import React from "react";
class Edit extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      alias: props.alias,
      team: props.team
    }

    this.onEditSubmit = this.onEditSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onAliasChange = this.onAliasChange.bind(this);
    this.onTeamChange = this.onTeamChange.bind(this);
  }

  onNameChange(event) {
    console.log(event.target.value)
    this.setState({name: event.target.value});
  }
  onAliasChange(event) {
    this.setState({alias: event.target.value});
  }
  onTeamChange(event) {
    this.setState({team: event.target.value});
  }

  onEditSubmit(event) {
    event.preventDefault()
    this.props.formSubmitCallback(
      this.state.name,
      this.state.alias,
      this.state.team
    )
    this.props.history.push(`/list`)
  }

  render() {
    return (
      <section><h3>Edit Form</h3>
        <form onSubmit={this.onEditSubmit}>
      <label>Name:<input type="text" name="name" onChange={this.onNameChange} /></label>
      <label>Alias:<input type="text"  name="alias" onChange={this.onAliasChange} /></label>
      <label>Team:<input type="text"  name="team" onChange={this.onTeamChange} /></label>
      <button>Submit</button>
    </form>
      </section>
    );
  }
}

  export default Edit;