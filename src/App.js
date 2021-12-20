import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import List from './pages/List';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddBook />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
