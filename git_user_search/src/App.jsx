

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import InputGroup  from 'react-bootstrap/InputGroup'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function App() {
  return (
  <div className='App'>
   
<Header></Header>
<UserSearch></UserSearch>
  </div>
  );
}

const Header = ()=>{
  return(

    <div className = "header">
        <img src={require("./assets/icons8-github-glyph-neue/icons8-github-512.png")} className='logo' alt = "githublogo" />
        <h1 className="heading">Github User Search</h1>
    </div>

  );
}

const UserSearch = ()=>{

  return(
    <div className="searchbox">

        <InputGroup className="mt-3 mb-3">
          <Form.Control
            placeholder="Search Github user name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary">search</Button>
        </InputGroup>

      
    </div>
);
}

export default App;
