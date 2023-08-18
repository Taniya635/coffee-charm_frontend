
import './App.css';
import Allroutes from './components/Navbar/Allroutes';
// import Carousel from './components/Carousel';
import Navbar from './components/Navbar/Navbar'
import Facecare from './components/Productpage/Facecare';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      {/* <Carousel/> */}
      {/* <Sidebar/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
