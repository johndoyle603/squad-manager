import React, { Component } from 'react';

class Teams extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getTeams();
  }

  // Retrieves the list of items from the Express app
  getTeams = () => {
    fetch('/api/teams')
      .then(res => res.json())
      .then(teams => this.setState({ teams }))
  }

  render() {
    const { teams } = this.state;

    return (
      <div className="App">
        <h1>Teams</h1>
        {/* Check to see if any items are found*/}
        {teams.length ? (
          <div>

            <div>
              {JSON.stringify(teams)};
                </div>

          </div>
        ) : (
            <div>
              <h2>No Teams Found ...</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default Teams;