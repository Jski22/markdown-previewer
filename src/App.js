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
      input3: "### And here's some other cool stuff:",
      input4: "Here's some code, `<div></div>`, between 2 backticks.",
      input5: "``` \n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n  }\n}\n```",
      input6: "You can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.",
      input7: "There's also [links](https://www.freecodecamp.org), and\n  > Block Quotes!"
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
          <Card bg={'info'} id="editor">
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
              <Row>
                <textarea value={this.state.input4} onChange={this.handleChange}  />
              </Row>
              <Row>
                <textarea value={this.state.input5} onChange={this.handleChange}  />
              </Row>
              <Row>
                <textarea value={this.state.input6} onChange={this.handleChange}  />
              </Row>
              <Row>
                <textarea value={this.state.input7} onChange={this.handleChange}  />
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
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input4)}}></Card.Text>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input5)}}></Card.Text>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input6)}}></Card.Text>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input7)}}></Card.Text>
            </Card.Body>
          </Card>
        </body>
      </div>
    );
  }
}

export default App;
