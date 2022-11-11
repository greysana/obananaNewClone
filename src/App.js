
import './App.css';

import styled from "styled-components";
import MainCon from './MainCon';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <Con>
      <Router>
        <MainCon />
      </Router>
    </Con>
  );
}
const Con = styled.div`
`

export default App;
