
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

function App() {
  return (
      <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
      </div>
  );
}

export default App;
