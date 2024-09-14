import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with Person object and 'shows' boolean
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "A software developer with a passion for learning.",
        imgSrc: "https://via.placeholder.com/150", // Placeholder image URL
        profession: "Software Developer"
      },
      shows: false,
      timeSinceMounted: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  // Method to toggle the 'shows' state
  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  // Lifecycle method to track time since the component was mounted
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1
      }));
    }, 1000);
  }

  // Clear interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
        
        {this.state.shows && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} alt="Profile" />
            <p>{this.state.Person.profession}</p>
          </div>
        )}

        <p>Time since component mounted: {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
