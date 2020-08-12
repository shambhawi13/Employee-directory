import React from 'react';
import EmployeeContainer from './pages/EmployeeContainer/EmployeeContainer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <EmployeeContainer></EmployeeContainer>
    </div>
  );
}

export default App;
