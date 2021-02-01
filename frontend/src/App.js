import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Nav, Tab, Container} from 'react-bootstrap'

//components
import UploadFileForm from './components/UploadFileForm'
import ShowFiles from './components/ShowFiles'

function App() {
  return (
    <div className="App">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="row">
            <Nav.Item>
              <Nav.Link eventKey="first">Upload File</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Fetch Files</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <UploadFileForm />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <ShowFiles />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;
