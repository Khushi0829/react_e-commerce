import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Deployment trigger comment
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AccountInfo from './pages/AccountInfo';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<AccountInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
