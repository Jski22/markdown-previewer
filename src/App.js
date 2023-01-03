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
      input: (`# Welcome to my React Markdown Previewer!
## This is a sub-heading
### And here's some other cool stuff:
Here's some code, \`<div></div>\`, between 2 backticks.
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode; 
    }
  }
\`\`\`
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.markdownguide.org/), and
  > Block Quotes!

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here...
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

![Markdown Logo](https://cdn.icon-icons.com/icons2/2389/PNG/512/markdown_logo_icon_145085.png)`),
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
                <textarea value={this.state.input} onChange={this.handleChange}  />
              </Row>
            </Card.Body>
          </Card>     
        </header>
        <body className="App-body">
          <Card bg={'info'} id="previewer">
            <Card.Header>Previewer</Card.Header>
            <Card.Body>
              <Card.Text dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></Card.Text>
            </Card.Body>
          </Card>
        </body>
      </div>
    );
  }
}

export default App;
