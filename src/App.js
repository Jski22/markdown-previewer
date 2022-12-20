import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Card bg={'info'}>
          <Card.Body>
            <Card.Text>This is some text</Card.Text>
          </Card.Body>
        </Card>     
      </header>
      <body className="App-body">
        <Card bg={'info'}>
          <Card.Body>
            <Card.Text>This is some text</Card.Text>
          </Card.Body>
        </Card>
      </body>
    </div>
  );
}

export default App;
