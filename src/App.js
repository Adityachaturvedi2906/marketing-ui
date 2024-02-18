import './App.css';
import Blogs from './components/Blogs';
import Category from './components/Category';
import Certified from './components/Certified';
import Community from './components/Community';
import Discover from './components/Discover';
import Explore from './components/Explore';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Header from './components/Header';
import Home from './components/Home';
import Reasons from './components/Reasons';
import Teachers from './components/Teachers';
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Explore />
      <Discover />
      <Category />
      <Reasons />
      <Community />
      <Teachers />
      <Certified />
      <Blogs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
