import { marked } from 'marked';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input1: "# Welcome to my React Markdown Previewer!",
      input2: "## This is a sub-heading",
      input3: "### And here's some other cool stuff:"
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
            <Card.Header>Editor</Card.Header>
            <Card.Body>
              <Row>
                <input value={this.state.input1} onChange={this.handleChange}  />
              </Row>
              <Row>
                <input value={this.state.input2} onChange={this.handleChange}  />
              </Row>
              <Row>
                <input value={this.state.input3} onChange={this.handleChange}  />
              </Row>
            </Card.Body>
          </Card>     
        </header>
        <body className="App-body">
          <Card bg={'info'} id="previewer">
            <Card.Header>Previewer</Card.Header>
            <Card.Body>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input1)}}></Card.Text>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input2)}}></Card.Text>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input3)}}></Card.Text>
            </Card.Body>
          </Card>
        </body>
      </div>
    );
  }
}

export default App;
