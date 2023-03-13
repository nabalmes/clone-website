import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Component1 } from './components/Pages/Component1/Component1';
import { Component2 } from './components/Pages/Component2/Component2';
import { Component3 } from './components/Pages/Component3/Component3';
import { Component4 } from './components/Pages/Component4/Component4';
import { Component5 } from './components/Pages/Component5/Component5';
import { Component6 } from './components/Pages/Component6/Component6';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className='section-container'>
        <Routes>
          <Route path='/'  element={<Component1 />}/>
          <Route path='/Component2'  element={<Component2 />}/>
          <Route path='/Component3'  element={<Component3 />}/>
          <Route path='/Component4'  element={<Component4 />}/>
          <Route path='/Component5'  element={<Component5 />}/>
          <Route path='/Component6'  element={<Component6 />}/>
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
