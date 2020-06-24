import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Search from './components/Search';

const Div = styled.div`
  display: flex;
  width: 1250px;
  margin: 0 auto;
  background-color: yellow;
`;

function App() {
  return (
    <div>
      <Header />
      <Div>
        <LeftNav />
        <Search />
      </Div>
    </div>
  );
}

export default App;
