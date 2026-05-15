import './App.css';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Categories from './components/Categories';
import DealsSection from './components/DealsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSlider />
      <Categories />
      <DealsSection />
      <Footer />
    </div>
  );
}

export default App;
