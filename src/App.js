import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: "#this is markup"
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
          <Card bg={'info'}>
            <Card.Body>
              <input value={this.state.input} onChange={this.handleChange}  />
            </Card.Body>
          </Card>     
        </header>
        <body className="App-body">
          <Card bg={'info'}>
            <Card.Body>
              <Card.Text>{this.state.input}</Card.Text>
            </Card.Body>
          </Card>
        </body>
      </div>
    );
  }
}

export default App;
